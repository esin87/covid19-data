import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';

const Search = ({
	data,
	setData,
	lastSearch,
	setLastSearch,
	handleChange,
	handleSubmit,
	searchString,
	formatNumber,
}) => {
	useEffect(() => {
		return () => {
			setData('');
			setLastSearch('');
		};
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			{lastSearch && (
				<SearchResults
					data={data}
					lastSearch={lastSearch}
					formatNumber={formatNumber}
				/>
			)}
		</div>
	);
};

export default Search;
