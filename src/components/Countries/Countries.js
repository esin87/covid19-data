import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';

const Countries = () => {
	const [countryData, setCountryData] = useState([]);

	useEffect(() => {
		getCountries();
		// eslint-disable-next-line
	}, []);

	function getCountries() {
		fetch('https://api.covid19api.com/countries')
			.then((res) => res.json())
			.then((res) => setCountryData(res))
			.catch((err) => console.error(err));
	}

	return (
		<div>
			<h2>Country List</h2>
			Click on a country name to see its Covid-19 data.
			{countryData.length === 0 && (
				<div>
					<Spinner animation='grow' role='status' variant='primary'></Spinner>
					Loading data...
				</div>
			)}
			{countryData.length > 0 && (
				<ListGroup variant='flush'>
					{countryData
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
		</div>
	);
};
export default Countries;
