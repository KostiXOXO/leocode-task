import React from 'react';
import { cleanup, render, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Users from './Users';

afterEach(cleanup);

it('Heading renders correctly', async () => {
	const { getByText, getByTestId } = render(<Users />);
	const spinner = getByTestId('spinner');
	expect(spinner).toBeInTheDocument();
	waitForElementToBeRemoved(spinner).then(() => getByText('Users list'));
});
