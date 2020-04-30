import React from 'react';
import LastUpdated from '../LastUpdated/LastUpdated';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const SearchResults = ({ data, lastSearch, formatNumber }) => {
	if (!data.length) {
		return (
			<Alert variant='warning' style={{ marginTop: '2.5rem' }}>
				Sorry, no data found for "{lastSearch}". Please try another query.
			</Alert>
		);
	}

	const latestData = data[data.length - 1];

	return (
		<div className='data-container' style={{ marginTop: '2.5rem' }}>
			<h3>{latestData.Country}</h3>
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
						<td>{formatNumber(latestData.Confirmed)}</td>
						<td>{formatNumber(latestData.Deaths)}</td>
						<td>{formatNumber(latestData.Recovered)}</td>
					</tr>
				</tbody>
			</Table>
			<LastUpdated date={latestData.Date} />
		</div>
	);
};

export default SearchResults;
