import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    skillCard: {
        backgroundColor: Theme.accents.dark,
        borderRadius: 10,
        padding: "1rem",
        overflow: "hidden",
        minWidth: "12rem",
        flex: 1
    },
})