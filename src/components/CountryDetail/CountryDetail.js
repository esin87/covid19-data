import React, { useState, useEffect } from 'react';
import LastUpdated from '../LastUpdated/LastUpdated';
import ResultsTable from '../ResultsTable/ResultsTable';

const CountryDetail = ({ match, formatNumber }) => {
	const [countryInfo, setCountryInfo] = useState('');
	const [error, setError] = useState('Loading ...');
	function getCountryInfo() {
		const url = `https://api.covid19api.com/total/country/${match.params.name}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				if (res.length === 0) {
					setError('No data available for selected locality.');
				} else {
					setCountryInfo(res[res.length - 1]);
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
				<ResultsTable formatNumber={formatNumber} data={countryInfo} />
				<LastUpdated date={countryInfo.Date} />
			</div>
		);
	}
	return <div>{error}</div>;
};

export default CountryDetail;
