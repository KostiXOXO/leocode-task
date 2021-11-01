import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

afterEach(cleanup);

it('Snapshot matches previous version', async () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});
