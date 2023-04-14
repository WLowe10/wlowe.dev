import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";

export const useStyles = createUseStyles({
    menu: {
        position: "fixed",
        zIndex: 99,
        top: 0, 
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: Theme.accents.dark,
        overflow: "hidden"
    }
});