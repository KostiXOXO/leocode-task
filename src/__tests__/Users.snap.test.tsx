import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { UsersView } from 'pages';

afterEach(cleanup);

it('Snapshot matches previous version', async () => {
	const tree = renderer.create(<UsersView />).toJSON();
	expect(tree).toMatchSnapshot();
});
