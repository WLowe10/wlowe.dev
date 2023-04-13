import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    gallery: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10
    },
    item: {
        display: "flex",
        height: 64,
        width: 96,
        backgroundColor: "black",
    }
});