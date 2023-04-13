import { useStyles } from "./styles";

type Props = {
    color: string,
    text: string
};

export const Pill = ({color, text}: Props) => {
    const classes = useStyles();

    return (
        <p className={classes.pill} style={{backgroundColor: color}}>
            {
                text
            }
        </p>
    )
}