import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { UsersList } from 'components';
import { sampleData } from 'utils/test-utils/userApiTestData';

afterEach(cleanup);

it('Component did not change', () => {
	const tree = renderer.create(<UsersList items={sampleData} />).toJSON();
	expect(tree).toMatchSnapshot();
});
