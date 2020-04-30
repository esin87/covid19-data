import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	return (
		<Navbar variant='light' expand='md' style={{ marginBottom: '2.5rem' }}>
			<LinkContainer to='/home'>
				<Navbar.Brand>COVID-19 Data</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<LinkContainer to='/home'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/countries'>
						<Nav.Link>Country List</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/search'>
						<Nav.Link>Country Search</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/global'>
						<Nav.Link>Global Summary</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/about'>
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
