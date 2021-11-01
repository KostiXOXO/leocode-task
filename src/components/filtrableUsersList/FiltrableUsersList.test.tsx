import React from 'react';
import { cleanup, render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FiltrableUsersList from './FiltrableUsersList';
import { sampleData } from 'utils/test-utils/userApiTestData';

afterEach(cleanup);

it('Filters data correctly with default threshold of 0.3', async () => {
	const { getByText, getByTestId } = render(<FiltrableUsersList data={sampleData} />);
	const inputField = getByTestId('input-field');
	expect(inputField).toBeInTheDocument();

	userEvent.type(inputField, 'testt');
	expect(inputField).toHaveValue('testt');

	getByText('test user');
	const userThatShouldBeFilteredOut = screen.queryByText('tetrisuser');
	expect(userThatShouldBeFilteredOut).not.toBeInTheDocument();
});

it('Filters data correctly with threshold of 0.8', async () => {
	const { getByText, getByTestId } = render(<FiltrableUsersList data={sampleData} threshold={0.8} />);
	const inputField = getByTestId('input-field');
	expect(inputField).toBeInTheDocument();

	userEvent.type(inputField, 'testuser');
	expect(inputField).toHaveValue('testuser');
	getByText('test user');
	getByText('tetrisuser');
});
