import React from 'react';
import Header from './Header';
import { HashRouter } from 'react-router-dom';
import { mount, render } from 'enzyme';

describe('Header component', () => {
	let component;

	beforeEach(() => {
		component = mount(
			<HashRouter>
				<Header />
			</HashRouter>
		);
	});

	it('renders', () => {
		render(component);
	});

	it('should match the snapshot', () => {
		expect(component.html()).toMatchSnapshot();
	});

	it('should have a first anchor tag with appropriate text', () => {
		expect(component.find('a').at(0).text()).toBe('COVID-19 Data');
	});

	it('should have a second anchor tag with appropriate text', () => {
		expect(component.find('a').at(1).text()).toBe('Home');
	});

	it('should have a third anchor tag wtih appropriate text', () => {
		expect(component.find('a').at(2).text()).toBe('Country List');
	});
});
