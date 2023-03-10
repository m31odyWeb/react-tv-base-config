import { useFocusable, UseFocusableConfig } from '@noriginmedia/norigin-spatial-navigation';
import cn from 'classnames';
import { FC, ReactNode, CSSProperties, useEffect } from 'react';

import { GLOBAL_FOCUSED_CLASS_NAME } from '~/configs/navigation.config';

interface IProps extends UseFocusableConfig {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	as?: any;
	className?: string;
	focusedClassName?: string;
	defaultFocused?: boolean;
	children?: ReactNode | Array<ReactNode>;
	style?: CSSProperties;
}

export const Focusable: FC<IProps> = ({
	children,
	style,
	as = 'div',
	className = '',
	focusedClassName = GLOBAL_FOCUSED_CLASS_NAME,
	defaultFocused = false,
	...focusableConfig
}) => {
	const Element = as;
	const { ref, focused, focusSelf } = useFocusable(focusableConfig);

	useEffect(() => {
		if (defaultFocused) {
			focusSelf();
		}
	}, [focusSelf, defaultFocused]);

	return (
		<Element
			className={cn([className, { [focusedClassName]: focused }]) || undefined}
			ref={ref}
			style={style}>
			{children}
		</Element>
	);
};
