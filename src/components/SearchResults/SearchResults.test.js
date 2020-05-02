import React from 'react';
import SearchResults from './SearchResults';
import { mount, render } from 'enzyme';

describe('SearchResults component', () => {
	let component;
	const lastSearch = 'United States';
	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}
	const data = [
		{
			Country: 'Switzerland',
			CountryCode: 'CH',
			Lat: '46.82',
			Lon: '8.23',
			Confirmed: 20505,
			Deaths: 666,
			Recovered: 6415,
			Active: 13424,
			Date: '2020-04-05T00:00:00Z',
			LocationID: '628d4f12-6ebe-4fa9-b046-77ff0b894a4e',
		},
	];

	beforeEach(() => {
		component = mount(
			<SearchResults
				data={data}
				lastSearch={lastSearch}
				formatNumber={formatNumber}
			/>
		);
	});

	it('renders', () => {
		render(component);
	});

	it('should match the snapshot', () => {
		expect(component.html()).toMatchSnapshot();
	});

	it('should have an h3 with appropriate text', () => {
		expect(component.find('h3').text()).toBe('Switzerland');
	});

	it('should have a muted text class with appropriate text', () => {
		expect(component.find('.text-muted').at(0).text()).toBe(
			'Last updated: a month ago'
		);
	});

	it('receives the appropriate props', () => {
		expect(component.props()).toEqual({
			lastSearch: 'United States',
			formatNumber: expect.any(Function),
			data: [
				{
					Country: 'Switzerland',
					CountryCode: 'CH',
					Lat: '46.82',
					Lon: '8.23',
					Confirmed: 20505,
					Deaths: 666,
					Recovered: 6415,
					Active: 13424,
					Date: '2020-04-05T00:00:00Z',
					LocationID: '628d4f12-6ebe-4fa9-b046-77ff0b894a4e',
				},
			],
		});
	});
});
