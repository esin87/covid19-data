import React from 'react';
import LastUpdated from '../LastUpdated/LastUpdated';
import ResultsTable from '../ResultsTable/ResultsTable';
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
			<ResultsTable formatNumber={formatNumber} data={latestData} />
			<LastUpdated date={latestData.Date} />
		</div>
	);
};

export default SearchResults;
