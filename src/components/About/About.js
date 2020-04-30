import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const About = () => {
	return (
		<Jumbotron>
			<h1>About COVID-19 Data</h1>
			<p>
				This site was inspired by the efforts of developers and engineers all
				around the world to provide technological resources in the midst of this
				global crisis.
			</p>
			<p>
				<a
					href='https://twitter.com/ksredelinghuys'
					target='_blank'
					rel='noreferrer noopener'>
					Kyle Redelinghuys
				</a>
				, in particular, created a free{' '}
				<a
					href='https://covid19api.com/'
					target='_blank'
					rel='noreferrer noopener'>
					Application Programming Interface (API)
				</a>{' '}
				that provides accurate and recent data on the pandemic by country, as
				collected by the{' '}
				<a
					href='https://github.com/CSSEGISandData/COVID-19'
					target='_blank'
					rel='noreferrer noopener'>
					Johns Hopkins University Center for Systems Science and Engineering
				</a>
				. It inspired me to build a simple frontend to allow users to easily
				search and access the information.
			</p>
			<p>
				This project is a work in progress -- check out the source code linked
				in the footer below if you'd like to contribute or have ideas!
			</p>
		</Jumbotron>
	);
};

export default About;
