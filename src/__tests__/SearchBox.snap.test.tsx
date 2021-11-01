import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { SearchBox } from 'components';

afterEach(cleanup);

it('Component did not change', async () => {
	const tree = renderer.create(<SearchBox value="test" onChange={jest.fn()} />).toJSON();
	expect(tree).toMatchSnapshot();
});
