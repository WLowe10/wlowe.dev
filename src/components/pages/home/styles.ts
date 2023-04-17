import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Sizes, Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
    home: {
        display: "flex",
        justifyContent: "center",         
    },
    mainContainer: {
        display: "flex",
        flex: 1,
        padding: "2rem",
        flexDirection: "column",
    },
    separator: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: {
            top: "5rem",
            bottom: "5rem"
        }
    },
    separatorText: {
        // background: "-webkit-linear-gradient(#415EDA, #333)",
        // "-webkit-background-clip": "text",
        // "-webkit-text-fill-color": "transparent",
        color: Theme.fontColors.primary,
        fontFamily: Families.Satisfy,
        fontSize: Sizes.Medium,
        padding: {
            left: "1rem",
            right: "1rem"
        }
    },
    aboutContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "5rem",
    }
})