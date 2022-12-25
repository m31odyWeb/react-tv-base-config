import { configureAndInitSpatialNavigation } from './navigation.config';

import { isProd } from '~/commons/utils/isProd';

export const initApp = () => {
	configureAndInitSpatialNavigation({
		keyMap: {
			left: [37, 72],
			right: [39, 76],
			down: [40, 74],
			up: [38, 75],
		},
		initializingConfig: { debug: !isProd() },
	});
};
