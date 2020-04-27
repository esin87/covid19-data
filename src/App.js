import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import Header from './components/Header/Header';
// import data from './data.json';

const App = () => {
	const searchOptions = {
		api: 'https://api.covid19api.com/',
		endpoint: 'total/country/',
	};

	const [data, setData] = useState([]);
	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, []);

	function getData() {
		const searchString = 'switzerland';
		const url = `${searchOptions.api}${searchOptions.endpoint}${searchString}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => console.error(err));
	}

	return (
		<div className='App'>
			<Header />
			<SearchForm />
			<SearchResults data={data} />
		</div>
	);
};

export default App;
