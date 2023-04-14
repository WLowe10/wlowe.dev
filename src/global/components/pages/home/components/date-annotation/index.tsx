import { useStyles } from "./styles";

type Props = {
    time: any
}

export const DateAnnotation = ({time}: Props) => {
    const classes = useStyles();

    return (
        <p className={classes.dateAnnotation}>
            Wes Lowe - 12/12/12
        </p>
    )
};  