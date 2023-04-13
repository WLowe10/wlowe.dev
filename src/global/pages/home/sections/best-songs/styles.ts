import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    bestSongs: {
        display: "flex",
        flexDirection: "column"
    },
    header: {
        paddingBlock: "4rem",
        color: Theme.fontColors.primary,
        fontSize: Sizes.Medium,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700]
    },
    songContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        flexDirection: "column",
        gap: "2rem"
    }
})