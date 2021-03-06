import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import UsersList from './UsersList';
import { sampleData } from 'utils/test-utils/userApiTestData';

afterEach(cleanup);

it('Renders UserList with given name and username starting with @', () => {
	const { getByText } = render(<UsersList items={sampleData} />);
	sampleData.forEach(({ name, username }) => {
		getByText(name);
		getByText(`@${username}`);
	});
});

describe('Renders with a className equal to the type', () => {
	it('Renders with a className equal to ordered', () => {
		render(<UsersList type="ordered" items={sampleData} />);
		const listComponentOrdered = screen.getByTestId('listComponent');
		expect(listComponentOrdered).toHaveClass('ordered');
	});

	it('Renders with a className equal to unordered', () => {
		render(<UsersList type="unordered" items={sampleData} />);
		const listComponentUnordered = screen.getByTestId('listComponent');
		expect(listComponentUnordered).toHaveClass('unordered');
	});
});

it('While no type given - renders with a className equal to unordered', () => {
	render(<UsersList items={sampleData} />);
	const listComponent = screen.getByTestId('listComponent');
	expect(listComponent).toHaveClass('unordered');
});
