import { Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    hoverContainer: {
        display: "inline-block",
        position: "relative",
    },
    text: {
        fontWeight: Weights.NunitoSans[700],
        color: Theme.fontColors.primary,
    },
    modalContent: {
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.accents.dark,
        borderRadius: "1rem",
        padding: "1rem",
        left: "50%",
        transform: "translate(-50%)",
    }
});

