import { useStyles } from "./styles";

type Props = {
    time: string
}

export const DateAnnotation = ({time}: Props) => {
    const classes = useStyles();

    return (
        <p className={classes.dateAnnotation}>
            Wes Lowe - {time}
        </p>
    )
};  