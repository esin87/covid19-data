import React from 'react';
import Home from './Home';
import { mount, render } from 'enzyme';
import { HashRouter } from 'react-router-dom';

describe('Home component', () => {
	let component;
	beforeEach(() => {
		component = mount(
			<HashRouter>
				<Home />
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
		expect(component.find('h1').text()).toBe('COVID-19 Data');
	});

	it('contains a first anchor element with the appropriate text', () => {
		expect(component.find('a').at(0).text()).toBe('covid19api.com');
	});

	it('contains a second anchor element with the appropriate text', () => {
		expect(component.find('a').at(1).text()).toBe('Start searching');
	});
});
