import React, { useState, useEffect } from 'react';
import LastUpdated from '../LastUpdated/LastUpdated';
import ExtendedResultsTable from '../ExtendedResultsTable/ExtendedResultsTable';

const CountryDetail = ({ match, formatNumber }) => {
	const [countryInfo, setCountryInfo] = useState('');
	const [error, setError] = useState('Loading ...');
	function getCountryInfo() {
		const url = `https://api.covid19api.com/summary`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const requestedCountry = res.Countries.find(
					(country) => country.Slug === match.params.name
				);
				if (!requestedCountry) {
					setError('No data available for selected locality.');
				} else {
					setCountryInfo(requestedCountry);
				}
			})
			.catch((err) =>
				setError('Oops, something went wrong. Please try again.')
			);
	}

	useEffect(() => {
		getCountryInfo();
		// eslint-disable-next-line
	}, []);

	if (countryInfo) {
		return (
			<div>
				<h2>{countryInfo.Country}</h2>
				<ExtendedResultsTable formatNumber={formatNumber} data={countryInfo} />
				<LastUpdated date={countryInfo.Date} />
			</div>
		);
	}

	if (!countryInfo) {
		return <div>{error}</div>;
	}
	return <div>{error}</div>;
};

export default CountryDetail;
