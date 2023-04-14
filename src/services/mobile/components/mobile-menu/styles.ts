import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Weights } from "@global/constants/fonts";
import { m } from "framer-motion";

export const useStyles = createUseStyles({
    menu: {
        position: "fixed",
        zIndex: 99,
        top: 0, 
        left: 0,
        width: "100vh",
        height: "100vh",
        backgroundColor: Theme.accents.dark,
        // overflow: "hidden",
        padding: "2rem"
    },
    navLinks: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    navLink: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        gap: "1rem",
        textDecoration: "none",
        // justifyContent: "space-around",
        alignItems: "center"
    },
    navText: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        color: Theme.fontColors.secondary
    }
});