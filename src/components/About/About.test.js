import React from 'react';
import About from './About';
import { mount, render } from 'enzyme';
import { HashRouter } from 'react-router-dom';

describe('About component', () => {
	let component;
	beforeEach(() => {
		component = mount(
			<HashRouter>
				<About />
			</HashRouter>
		);
	});

	it('renders', () => {
		render(component);
	});

	it('should match the snapshot', () => {
		expect(component.html()).toMatchSnapshot();
	});

	it('contains a h1 element with the appropriate text', () => {
		expect(component.find('h1').text()).toBe('About COVID-19 Data');
	});

	it('contains a first anchor element with the appropriate text', () => {
		expect(component.find('a').at(0).text()).toBe('Kyle Redelinghuys');
	});

	it('contains a second anchor element with the appropriate text', () => {
		expect(component.find('a').at(1).text()).toBe(
			'Application Programming Interface (API)'
		);
	});

	it('contains a first paragraph element with the appropriate text', () => {
		expect(component.find('p').at(0).text()).toBe(
			'This site was inspired by the efforts of developers and engineers all around the world to provide technological resources in the midst of this global crisis.'
		);
	});
});

