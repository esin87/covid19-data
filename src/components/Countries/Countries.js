import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';

const Countries = () => {
	const [countryData, setCountryData] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		getCountries();
		// eslint-disable-next-line
	}, []);

	function getCountries() {
		fetch('https://api.covid19api.com/countries')
			.then((res) => res.json())
			.then((res) => {
				setCountryData(res);
				if (!searchString) {
					setFilteredCountries(res);
				}
			})
			.catch((err) =>
				setError('Oops, something went wrong! Please try again.')
			);
	}

	function handleChange(event) {
		const searchInput = event.target.value;
		setSearchString(searchInput);
		const filter = countryData.filter((country) =>
			country.Country.toLowerCase().includes(searchInput.toLowerCase())
		);
		setFilteredCountries(filter);
		searchInput
			? setFilteredCountries(filter)
			: setFilteredCountries(countryData);
	}

	return (
		<div>
			<h2>Country List</h2>
			Click on a country name to see its COVID-19 data.
			<Form style={{ marginTop: '1.5rem' }}>
				<Form.Group>
					<Form.Control
						size='lg'
						placeholder='Filter by country name'
						type='text'
						name='searchString'
						required
						onChange={handleChange}
						value={searchString}
					/>
				</Form.Group>
			</Form>{' '}
			{countryData.length === 0 && (
				<div>
					<Spinner animation='grow' role='status' variant='primary'></Spinner>
					Loading data...
				</div>
			)}
			{countryData.length > 0 && (
				<ListGroup variant='flush'>
					{filteredCountries
						.sort((a, b) => {
							if (a.Country > b.Country) {
								return 1;
							}
							if (b.Country > a.Country) {
								return -1;
							}
							return 0;
						})
						.map((country, index) => {
							return (
								<LinkContainer
									to={`countries/${country.Slug}`}
									key={`${index}-${country.Slug}`}>
									<ListGroup.Item action>{country.Country}</ListGroup.Item>
								</LinkContainer>
							);
						})}
				</ListGroup>
			)}
			{error !== '' && (
				<Alert variant='warning' style={{ marginTop: '2.5rem' }}>
					{error}
				</Alert>
			)}
		</div>
	);
};
export default Countries;
