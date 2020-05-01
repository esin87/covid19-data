import React from 'react';
import SearchForm from './SearchForm';
import { mount, render } from 'enzyme';

describe('SearchForm component', () => {
	let component;
	const searchString = 'United States';
	function handleSubmit() {
		return;
	}
	function handleChange() {
		return;
	}
	// const data = {
	// 	Country: 'Switzerland',
	// 	CountryCode: 'CH',
	// 	Lat: '46.82',
	// 	Lon: '8.23',
	// 	Confirmed: 20505,
	// 	Deaths: 666,
	// 	Recovered: 6415,
	// 	Active: 13424,
	// 	Date: '2020-04-05T00:00:00Z',
	// 	LocationID: '628d4f12-6ebe-4fa9-b046-77ff0b894a4e',
	// };

	beforeEach(() => {
		component = mount(
			<SearchForm
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
		);
	});

	it('renders', () => {
		render(component);
	});

	it('should match the snapshot', () => {
		expect(component.html()).toMatchSnapshot();
	});

	it('should have an h2 with appropriate text', () => {
		expect(component.find('h2').text()).toBe('Country Search');
	});

	it('should have a muted text class with appropriate text', () => {
		expect(component.find('.text-muted').at(0).text()).toBe(
			'Search by full or partial country name. No abbreviations, i.e., "United States", not "USA".'
		);
	});

	it('should have a button with appropriate text', () => {
		expect(component.find('button').text()).toBe('Submit');
	});

	it('receives the appropriate props', () => {
		expect(component.props()).toEqual({
			searchString: 'United States',
			handleChange: expect.any(Function),
			handleSubmit: expect.any(Function),
		});
	});
});
