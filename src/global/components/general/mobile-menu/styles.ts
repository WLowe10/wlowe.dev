import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    menu: {
        position: "absolute",
        zIndex: 99,
        top: 0, 
        left: 0,
        width: "100vh",
        height: "100vh",
        backgroundColor: "red"
    }
});