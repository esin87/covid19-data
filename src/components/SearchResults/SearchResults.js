import React from 'react';
import Moment from 'react-moment';

const SearchResults = ({ data }) => {
	if (!data.length) {
		return <h2>No data found!</h2>;
	}

	const latestData = data[data.length - 1];
	const dateToFormat = latestData.Date;
	return (
		<div className='data-container'>
			<h3>{latestData.Country}</h3>
			<ul>
				<li>Confirmed cases: {latestData.Confirmed}</li>
				<li>Deaths: {latestData.Deaths}</li>
				<li>Recovered: {latestData.Recovered}</li>
			</ul>
			<p>
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
