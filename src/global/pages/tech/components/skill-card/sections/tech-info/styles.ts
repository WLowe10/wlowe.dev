import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    techInfo: {
        display: "flex",
        flexDirection: "column",
        flex: 1, 
    },
    header: {
        display: "flex",
        marginBottom: "1rem",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        gap: 10,
    },
    backButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: Theme.accents.darker,
        borderRadius: 100
    },
    credentials: {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1, 
        gap: 10,
    },
    techInfoName: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        color: Theme.fontColors.primary,
        fontSize: Sizes.Medium
    },
    mainInfo: {
        display: "flex",
        paddingBottom: "2rem"
    },
    description: {
       color: Theme.fontColors.secondary,
       fontFamily: Families.NunitoSans,
       lineHeight: 1.5,
    },
    galleryContainer: {
        paddingBottom: "1rem"
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    }
})