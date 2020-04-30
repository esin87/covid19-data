import React from 'react';
import App from './App';
import { mount, render } from 'enzyme';

describe('App component', () => {
	let component;
	beforeEach(() => {
		component = mount(<App />);
	});

	it('renders', () => {
		render(component);
	});

	it('should match the snapshot', () => {
		expect(component.html()).toMatchSnapshot();
	});

	it('contains a main element with the appropriate text', () => {
		expect(component.find('main').text()).toBe(
			'COVID-19 DataA free, open-source tool to search for up-to-date COVID-19 case information by country. Data courtesy of covid19api.com.Start searching'
		);
	});

	it('contains a footer element with the appropriate text', () => {
		expect(component.find('footer').text()).toBe(
			'Created by Esin Saribudak. See source code here.'
		);
	});
});
