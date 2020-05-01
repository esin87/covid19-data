import React from 'react';
import ResultsTable from './ResultsTable';
import { mount, render } from 'enzyme';

describe('ResultsTable component', () => {
	let component;
	const data = {
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
	};
	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	beforeEach(() => {
		component = mount(<ResultsTable data={data} formatNumber={formatNumber} />);
	});

	it('renders', () => {
		render(component);
	});

	it('should match the snapshot', () => {
		expect(component.html()).toMatchSnapshot();
	});

	it('should have the first table head row be empty', () => {
		expect(component.find('th').at(0).text()).toBe('');
	});

	it('should have a second table head row with the appropriate text', () => {
		expect(component.find('th').at(1).text()).toBe('Confirmed cases');
	});

	it('receives the appropriate props', () => {
		expect(component.props()).toEqual({
			data: {
				Active: 13424,
				Confirmed: 20505,
				Country: 'Switzerland',
				CountryCode: 'CH',
				Date: '2020-04-05T00:00:00Z',
				Deaths: 666,
				Lat: '46.82',
				LocationID: '628d4f12-6ebe-4fa9-b046-77ff0b894a4e',
				Lon: '8.23',
				Recovered: 6415,
			},
			formatNumber: expect.any(Function),
		});
	});
});
