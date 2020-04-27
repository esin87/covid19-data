import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<div className='App'>
			<main>
				<Container>
					<Header />
					<Switch>
						<Route exact path='/home' component={Home} />
						<Route exact path='/search' component={Search} />
						<Route exact path='/countries' component={Countries} />
						<Route
							exact
							path='/countries/:name'
							render={(props) => <CountryDetail {...props} />}
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
