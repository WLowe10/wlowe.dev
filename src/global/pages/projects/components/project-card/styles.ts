import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    projectCard: {
        backgroundColor: Theme.accents.dark,
        borderRadius: 10,
        padding: "1rem",
        // minWidth: "15rem",
        borderWidth: 1,
        border: "solid",
        cursor: "pointer",
        flex: 1
    },
    cardHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: Sizes.Medium,
        color: Theme.fontColors.primary,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        paddingBottom: 8,
        marginBottom: 6,
        borderBottomWidth: 1,
        borderColor: Theme.accents.grey,
        borderStyle: "solid"
    },
    cardBody: {
        fontSize: Sizes.Default,
        color: Theme.fontColors.secondary,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[400],
        lineHeight: 1.5
    }
});