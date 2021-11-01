import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import UsersList from './UsersList';

afterEach(cleanup);

const items = [
	{ name: 'Krystian', username: 'Kosti' },
	{ name: 'User1', username: 'Username1' },
];

it('Renders UserList with given name and username starting with @', () => {
	const { getByText } = render(<UsersList items={items} />);
	getByText('Krystian');
	getByText('@Kosti');

	getByText('User1');
	getByText('@Username1');
});

it('Renders with a className equal to the type', () => {
	render(<UsersList type="ordered" items={items} />);
	const listComponentOrdered = screen.getByTestId('listComponent');
	expect(listComponentOrdered).toHaveClass('ordered');

	cleanup();

	render(<UsersList type="unordered" items={items} />);
	const listComponentUnordered = screen.getByTestId('listComponent');
	expect(listComponentUnordered).toHaveClass('unordered');
});

it('While no type given - renders with a className equal to unordered', () => {
	render(<UsersList items={items} />);
	const listComponent = screen.getByTestId('listComponent');
	expect(listComponent).toHaveClass('unordered');
});

it('Component did not change', () => {
	const tree = renderer.create(<UsersList items={items} />).toJSON();
	expect(tree).toMatchSnapshot();
});
