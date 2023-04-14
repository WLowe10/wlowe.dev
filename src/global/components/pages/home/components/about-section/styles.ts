import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    aboutSection: {
        position: "relative",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        //!not working yet
    },
    tab: {
        display: "flex",
        flexDirection: "row",
    },
    aboutTitle: {
        backgroundColor: "#141414",
        fontFamily: Families.NunitoSans,
        color: Theme.fontColors.primary,
        fontWeight: Weights.NunitoSans[600],
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        maxWidth: "fit-content",
        padding: {
            left: "1rem",
            right: "1rem",
            top: ".5rem"
        }
    },
    content: {
        display: "flex",
        backgroundColor: "#141414",
        padding: "1rem",
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
    },
});