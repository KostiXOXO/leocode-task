import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';

import SearchBox from './SearchBox';

afterEach(cleanup);

it('Should not fail any accessibility tests', async () => {
	const { container } = render(<SearchBox placeholder="Search test..." value="test" onChange={jest.fn()} />);
	expect(await axe(container)).toHaveNoViolations;
});

it('Placeholder should be applied', () => {
	render(<SearchBox placeholder="Search test..." value="test" onChange={jest.fn()} />);
	const elem = screen.getByPlaceholderText('Search test...');
	expect(elem).toBeInTheDocument();
});
