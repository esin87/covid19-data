import React from 'react';
import Table from 'react-bootstrap/Table';

const ExtendedResultsTable = ({ data, formatNumber }) => {
	return (
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
					<td>New</td>
					<td>{formatNumber(data.NewConfirmed)}</td>
					<td>{formatNumber(data.NewDeaths)}</td>
					<td>{formatNumber(data.NewRecovered)}</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>{formatNumber(data.TotalConfirmed)}</td>
					<td>{formatNumber(data.TotalDeaths)}</td>
					<td>{formatNumber(data.TotalRecovered)}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default ExtendedResultsTable;
