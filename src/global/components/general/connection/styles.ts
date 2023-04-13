import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    connection: {
        display: "flex",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        color: "inherit"
    },
    connectionText: {
        marginLeft: 10,
        fontFamily: Families.NunitoSans,
        color: Theme.fontColors.primary,
        fontWeight: Weights.NunitoSans[600]
    }
})