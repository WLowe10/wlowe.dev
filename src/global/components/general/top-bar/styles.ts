import { createUseStyles } from "react-jss";
import { Families, Weights, Sizes } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";

export const useStyles = createUseStyles({
    topBar: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: {
            bottom: 50
        }
    },
    presence: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 32
    },
    presenceText: {
        color: Theme.fontColors.secondary,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600]
    },
    navContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontFamily: Families.SaiyanSans,
        color: Theme.fontColors.primary,
        fontSize: Sizes.ExtraLarge,
    },
    navElement: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        color: Theme.accents.grey,
        textDecoration: "none"
    },
    navElementActive: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        color: Theme.fontColors.secondary,
        textDecoration: "none"
    }
})