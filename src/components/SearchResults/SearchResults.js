import React from 'react';
import Moment from 'react-moment';
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
	const dateToFormat = latestData.Date;
	// thank you to https://blog.abelotech.com/posts/number-currency-formatting-javascript/ for a tutorial on using regex to parse commas into numbers

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
			<p className='text-muted' style={{ marginTop: '0.5rem' }}>
				Last updated:{' '}
				<Moment fromNow ago>
					{dateToFormat}
				</Moment>{' '}
				ago
			</p>
		</div>
	);
};

export default SearchResults;
