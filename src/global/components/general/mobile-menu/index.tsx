import { Portal } from "react-portal";
import { useStyles } from "./styles";

type Props = {
    open: boolean
};

export const MobileMenu = ({ open }: Props) => {
    const classes = useStyles();

    return (
        <Portal>
            {
                open && (
                    <div className={classes.menu}>
                    </div>
                )
            }
        </Portal>
    )
};