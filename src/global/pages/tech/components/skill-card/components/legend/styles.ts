import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    legend: {
        display: "flex",
        position: "relative",
    },
    legendButton: {
        display: "flex",
        backgroundColor: Theme.accents.darker,
        padding: 10, 
        borderRadius: 8,
        userSelect: "none",
        cursor: "pointer",
    },
    legendKey: {
        display: "flex",
        position: "absolute",
        zIndex: 1,
        flexDirection: "column", 
        gap: 10,
        backgroundColor: Theme.accents.darker,
        overflow: "hidden",
        padding: 10,
        right: "100%",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 0,
    },
    legendText: {
        fontFamily: Families.NunitoSans,
        color: Theme.fontColors.primary, 
        padding: 5,
        borderRadius: 4
    },
    spacer: {
        marginTop: 10
    }
});