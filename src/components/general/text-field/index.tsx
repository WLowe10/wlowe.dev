import { useStyles } from "./styles";
import type { PropsWithChildren } from "react";

export const TextField = ({ children }: PropsWithChildren) => {
	const classes = useStyles();

	return <div className={classes.textField}>{children}</div>;
};
