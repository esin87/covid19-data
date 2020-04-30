import React from 'react';
import Table from 'react-bootstrap/Table';

const ResultsTable = ({ data, formatNumber }) => {
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
					<td>Total</td>
					<td>{formatNumber(data.Confirmed)}</td>
					<td>{formatNumber(data.Deaths)}</td>
					<td>{formatNumber(data.Recovered)}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default ResultsTable;
