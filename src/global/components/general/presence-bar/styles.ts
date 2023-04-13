import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";
import { Families } from "@global/constants/fonts";
import { Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
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
});