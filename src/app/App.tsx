import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';

import { FocusProvider } from '~/commons/contexts/FocusContext';
import { initApp } from '~/configs';

// Initializing configs
initApp();

export const App = () => {
	return (
		<div className="app">
			<FocusProvider>
				<RouterProvider router={router} />
			</FocusProvider>
		</div>
	);
};
