import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { FiltrableUsersList } from 'components';
import { sampleData } from 'utils/test-utils/userApiTestData';

afterEach(cleanup);

it('Component did not change', async () => {
	const tree = renderer.create(<FiltrableUsersList data={sampleData} />).toJSON();
	expect(tree).toMatchSnapshot();
});
