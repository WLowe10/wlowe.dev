import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    card: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: Theme.accents.dark,
        borderRadius: "1rem",
        padding: "1rem",
        height: "fit-content",
        overflow: "hidden"
    },
    cardTitleRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600],
        color: Theme.fontColors.primary,
        fontSize: Sizes.Medium
    },
    expandButton: {

    },
    cardContent: {

    }
})