import { Families, Weights, Sizes } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    textField: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600],
        color: Theme.fontColors.secondary,
        fontSize: Sizes.Medium,
        lineHeight: "3rem",
    },
});