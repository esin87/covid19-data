import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import { Switch, Route } from 'react-router-dom';
const App = () => {
	return (
		<div className='App'>
			<Container>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/search' component={Search} />
				</Switch>
			</Container>
		</div>
	);
};

export default App;
