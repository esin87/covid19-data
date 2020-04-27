import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import Header from './components/Header/Header';
import data from './data.json';
const App = () => {
	return (
		<div className='App'>
			<Header />
			<SearchForm />
			<SearchResults data={data} />
		</div>
	);
};

export default App;
