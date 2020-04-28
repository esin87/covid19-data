import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import About from './components/About/About'
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
	const searchOptions = {
		api: 'https://api.covid19api.com/',
		endpoint: 'total/country/',
	};

	const [data, setData] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [lastSearch, setLastSearch] = useState('');
	const [error, setError] = useState('');

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
				.catch((err) =>
					setError('Oops, something went wrong. Please try again.')
				);
		}
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getData(searchString);
	}
	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	return (
		<div className='App'>
			<Header />
			<main>
				<Container>
					<Switch>
						<Route exact path='/home' component={Home} />
						<Route
							exact
							path='/search'
							render={(props) => (
								<Search
									{...props}
									data={data}
									setData={setData}
									lastSearch={lastSearch}
									searchString={searchString}
									setLastSearch={setLastSearch}
									handleChange={handleChange}
									handleSubmit={handleSubmit}
									formatNumber={formatNumber}
									getData={getData}
								/>
							)}
						/>
						<Route exact path="/about" component={About} />
						<Route exact path='/countries' component={Countries} />
						<Route
							exact
							path='/countries/:name'
							render={(props) => (
								<CountryDetail
									match={props.match}
									formatNumber={formatNumber}
								/>
							)}
						/>
						<Redirect to='/home' />
					</Switch>
				</Container>
			</main>
			<footer className='text-muted'>
				Created by{' '}
				<a
					href='https://esinsaribudak.com'
					target='_blank'
					rel='noopener noreferrer'>
					Esin Saribudak
				</a>
				. See source code{' '}
				<a
					href='https://github.com/esin87/covid19-data'
					target='_blank'
					rel='noopener noreferrer'>
					here
				</a>
				.
			</footer>
		</div>
	);
};

export default App;
