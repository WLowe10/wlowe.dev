import { CSSProperties, type PropsWithChildren } from "react";

type Props = {
	style?: CSSProperties;
	className?: string;
};

export const FullFlex = ({
	children,
	style,
	className,
}: PropsWithChildren<Props>) => {
	return (
		<div
			style={{ display: "flex", minHeight: "100vh", ...style }}
			className={className}
		>
			{children}
		</div>
	);
};
