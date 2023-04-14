import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Sizes, Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
    tech: {
        display: "flex",
        justifyContent: "center",         
    },
    skillContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
    },
})