import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import Table from 'react-bootstrap/Table';

const CountryDetail = (props) => {
	const [countryInfo, setCountryInfo] = useState('');
	const [error, setError] = useState('Loading ...');
	function getCountryInfo() {
		const url = `https://api.covid19api.com/total/country/${props.match.params.name}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				if (res.length === 0) {
					setError('No data available for selected country.');
				} else {
					setCountryInfo(res[res.length - 1]);
				}
			})
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		getCountryInfo();
		// eslint-disable-next-line
	}, []);

	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	if (countryInfo) {
		return (
			<div>
				<h2>Covid-19 Summary for {countryInfo.Country}</h2>
				<Table>
					<thead>
						<tr>
							<th></th>
							<th>Confirmed</th>
							<th>Deaths</th>
							<th>Recovered</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Total</td>
							<td>{formatNumber(countryInfo.Confirmed)}</td>
							<td>{formatNumber(countryInfo.Deaths)}</td>
							<td>{formatNumber(countryInfo.Recovered)}</td>
						</tr>
					</tbody>
				</Table>
				<p className='text-muted'>
					Last updated:{' '}
					<Moment fromNow ago>
						{countryInfo.Date}
					</Moment>{' '}
					ago
				</p>
			</div>
		);
	}
	return <div>{error}</div>;
};

export default CountryDetail;
