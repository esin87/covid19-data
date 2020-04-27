import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import Header from '../Header/Header';
import SearchHeader from '../SearchHeader/SearchHeader';

const Search = () => {
	const searchOptions = {
		api: 'https://api.covid19api.com/',
		endpoint: 'total/country/',
	};

	const [data, setData] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [lastSearch, setLastSearch] = useState('');

	useEffect(() => {
		getData(searchString);
		// eslint-disable-next-line
	}, []);

	function getData(searchString) {
		if (searchString) {
			const url = `${searchOptions.api}${searchOptions.endpoint}${searchString}`;
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setData(res);
					setLastSearch(searchString);
					setSearchString('');
				})
				.catch((err) => console.error(err));
		}
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getData(searchString);
	}
	return (
		<div>
			<Header />
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<SearchHeader lastSearch={lastSearch} />
			<SearchResults data={data} />
		</div>
	);
};

export default Search;
