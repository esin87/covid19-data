import React from 'react';
import LastUpdated from './LastUpdated';
import { mount, render } from 'enzyme';

describe('LastUpdated component', () => {
	let component;
	const date = '2020-03-16T21:10:53.86852587Z';

	beforeEach(() => {
		component = mount(<LastUpdated date={date} />);
	});

	it('renders', () => {
		render(component);
	});

	it('should match the snapshot', () => {
		expect(component.html()).toMatchSnapshot();
	});

	it('contains a paragraph element with the appropriate text', () => {
		expect(component.find('p').text()).toBe('Last updated: a month ago');
	});

	it('receives the appropriate props', () => {
		expect(component.props()).toEqual({
			date: '2020-03-16T21:10:53.86852587Z',
		});
	});
});
