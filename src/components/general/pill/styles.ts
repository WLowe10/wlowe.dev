import { Families, Sizes } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    pill: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: Sizes.ExtraSmall,
        maxWidth: "fit-content",
        borderRadius: 6,
        fontSize: Sizes.Small,
        color: Theme.fontColors.primary,
        fontFamily: Families.NunitoSans
    }
})