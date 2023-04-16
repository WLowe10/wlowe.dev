import { ReactNode } from "react";
import { useStyles } from "./styles";

type Props = {
    children: ReactNode
}

export const TextField = ({children}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.textField}>{children}</div>
    )
};