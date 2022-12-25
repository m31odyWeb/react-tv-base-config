import {
	FocusContext,
	useFocusable,
	UseFocusableResult,
} from '@noriginmedia/norigin-spatial-navigation';
import { createContext, FC, ReactNode, useContext } from 'react';

export const APP_ROOT_FOCUS_KEY = 'APP';

interface IProps {
	children: ReactNode | Array<ReactNode>;
}

const Context = createContext<UseFocusableResult | null>(null);

export const FocusProvider: FC<IProps> = ({ children }) => {
	const result = useFocusable({ focusKey: APP_ROOT_FOCUS_KEY });

	return (
		<FocusContext.Provider value={result.focusKey}>
			<Context.Provider value={result}>
				<div ref={result.ref}>{children}</div>
			</Context.Provider>
		</FocusContext.Provider>
	);
};

export const useFocusContext = () => useContext(Context);
