import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
const Home = () => {
	return (
		<Jumbotron>
			<h1>Covid 19 Data</h1>
			<p>
				Search for Covid-19 case information by country. Data courtesy of{' '}
				<a
					href='https://covid19api.com/'
					target='_blank'
					rel='noopener noreferrer'>
					covid19api.com
				</a>
			</p>
			<p>
				<LinkContainer to='/search'>
					<Button variant='primary'>Start searching</Button>
				</LinkContainer>
			</p>
		</Jumbotron>
	);
};

export default Home;
