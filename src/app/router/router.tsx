import { createHashRouter } from 'react-router-dom';

// Components
import { MainLayout } from '~/commons/layouts/MainLayout/MainLayout';

export const ROUTER_BOOK = {
	INDEX: '/',
};

export const router = createHashRouter([
	{
		path: ROUTER_BOOK.INDEX,
		element: <MainLayout />,
	},
]);
