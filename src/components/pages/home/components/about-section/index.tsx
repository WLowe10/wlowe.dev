import { Music } from "react-feather";
import { useStyles } from "./styles";
import type { PropsWithChildren } from "react";

type Props = {
	title: string;
};

export const AboutSection = ({ children, title }: PropsWithChildren<Props>) => {
	const classes = useStyles();

	return (
		<section>
			<h2 className={classes.header}>{title}</h2>
			{children}
		</section>
	);
};
