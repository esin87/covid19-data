import React, { useEffect, useState } from 'react';
import LastUpdated from '../LastUpdated/LastUpdated';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const Global = ({ formatNumber }) => {
	const [globalData, setGlobalData] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		getGlobalData();
		if (error) {
			setError('');
		}
		// eslint-disable-next-line
	}, []);

	function getGlobalData() {
		const url = 'https://api.covid19api.com/summary';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setGlobalData(res.Global);
			})
			.catch((err) =>
				setError('Oops, something went wrong! Please try again.')
			);
	}

	if (!globalData) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <Alert variant={'danger'}>{error}</Alert>;
	}

	return (
		<div>
			<h3 style={{ marginBottom: '1.5em' }}>Global Summary</h3>
			<Table>
				<thead>
					<tr>
						<th></th>
						<th>Confirmed cases</th>
						<th>Deaths</th>
						<th>Recovered</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Total</td>
						<td>{formatNumber(globalData.TotalConfirmed)}</td>
						<td>{formatNumber(globalData.TotalDeaths)}</td>
						<td>{formatNumber(globalData.TotalRecovered)}</td>
					</tr>
					<tr>
						<td>New</td>
						<td>{formatNumber(globalData.NewConfirmed)}</td>
						<td>{formatNumber(globalData.NewDeaths)}</td>
						<td>{formatNumber(globalData.NewRecovered)}</td>
					</tr>
				</tbody>
			</Table>
			<LastUpdated date={globalData.Date} />
		</div>
	);
};

export default Global;
