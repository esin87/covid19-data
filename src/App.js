import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import Header from './components/Header/Header';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<SearchForm />
			<SearchResults />
		</div>
	);
};

export default App;
