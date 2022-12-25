import {
	BackwardsCompatibleKeyMap,
	init,
	setKeyMap,
} from '@noriginmedia/norigin-spatial-navigation';

interface IArguments {
	keyMap?: BackwardsCompatibleKeyMap;
	initializingConfig?: {
		debug?: boolean;
		visualDebug?: boolean;
		nativeMode?: boolean;
		throttle?: number;
		throttleKeypresses?: boolean;
	};
}

export const GLOBAL_FOCUSED_CLASS_NAME = 'focused';

export const configureAndInitSpatialNavigation = ({ keyMap, initializingConfig }: IArguments) => {
	if (keyMap) {
		setKeyMap(keyMap);
	}
	init(initializingConfig);
};
