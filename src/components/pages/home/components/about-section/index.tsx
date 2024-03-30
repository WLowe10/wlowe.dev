import { ReactNode } from "react";
import { Music } from "react-feather";
import { useStyles } from "./styles";

type Props = {
	children: ReactNode;
	title: string;
};

export const AboutSection = ({ children, title }: Props) => {
	const classes = useStyles();

	return (
		<section>
			<h2 className={classes.header}>{title}</h2>
			{children}
		</section>
	);
};
