import { createUseStyles } from "react-jss";
import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";

export const useStyles = createUseStyles({
    skill: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: ".5rem",
        borderRadius: 8,
        width: "10rem",
    },
    skillTitle: {
        fontFamily: Families.NunitoSans,
        color: Theme.fontColors.primary,
    },
    skillAcronym: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        color: Theme.fontColors.secondary,
    },
    skillImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 8,
        backgroundColor: Theme.accents.darker,
        marginRight: 10,
        height: 24,
        width: 24,
        minWidth: 24
    },
    arrowContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        paddingLeft: 10
    }
})