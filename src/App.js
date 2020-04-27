import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import Header from './components/Header/Header';
import SearchHeader from './components/SearchHeader/SearchHeader';
const App = () => {
	const searchOptions = {
		api: 'https://api.covid19api.com/',
		endpoint: 'total/country/',
	};

	const [data, setData] = useState([]);
	const [searchString, setSearchString] = useState('united states');
	const [lastSearch, setLastSearch] = useState('');

	useEffect(() => {
		getData(searchString);
		// eslint-disable-next-line
	}, []);

	function getData(searchString) {
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

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getData(searchString);
	}

	return (
		<div className='App'>
			<Header />
			<SearchHeader lastSearch={lastSearch} />
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<SearchResults data={data} />
		</div>
	);
};

export default App;
