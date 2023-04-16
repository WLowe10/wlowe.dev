import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";

export const useStyles = createUseStyles({
    backButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: Theme.accents.darker,
        borderRadius: 100
    }
})