import React from 'react';
import Global from './Global';
import { mount } from 'enzyme';

describe('Global component', () => {
	let component;
	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	const globalData = {
		NewConfirmed: 53041,
		TotalConfirmed: 2142221,
		NewDeaths: 3583,
		TotalDeaths: 168885,
		NewRecovered: 40194,
		TotalRecovered: 1005926,
	};

	beforeEach(() => {
		component = mount(<Global formatNumber={formatNumber} />);
	});

	it('renders loading div', () => {
		expect(component.find('div').text()).toBe('Loading...');
	});
});
