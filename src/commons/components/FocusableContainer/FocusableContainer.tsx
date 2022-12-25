import {
	FocusContext,
	useFocusable,
	UseFocusableConfig,
} from '@noriginmedia/norigin-spatial-navigation';
import cn from 'classnames';
import { CSSProperties, FC, ReactNode, useEffect } from 'react';

interface IProps extends UseFocusableConfig {
	children: ReactNode | Array<ReactNode>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	as?: any;
	className?: string;
	hasFocusedChildClassName?: string;
	defaultFocused?: boolean;
	style?: CSSProperties;
}

export const FocusableContainer: FC<IProps> = ({
	children,
	as = 'div',
	className = '',
	hasFocusedChildClassName = '',
	defaultFocused = false,
	style,
	...focusableConfig
}) => {
	const { ref, focusKey, hasFocusedChild, focusSelf } = useFocusable(focusableConfig);

	const Container = as;

	useEffect(() => {
		if (focusableConfig.isFocusBoundary || defaultFocused) {
			focusSelf();
		}
	}, [focusSelf, defaultFocused, focusableConfig.isFocusBoundary]);

	return (
		<FocusContext.Provider value={focusKey}>
			<Container
				className={cn([className, { [hasFocusedChildClassName]: hasFocusedChild }]) || undefined}
				ref={ref}
				style={style}>
				{children}
			</Container>
		</FocusContext.Provider>
	);
};
