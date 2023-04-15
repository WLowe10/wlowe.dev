import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useGlobalStyles = createUseStyles({
  "@global": {
    "body": {
      overflow: "overlay",
      fontSize: "100%",
      backgroundColor: Theme.background
    },
    "button": {
      background: "none",
      color: "inherit",
      border: "none",
      padding: 0,
      font: "inherit",
      cursor: "pointer",
      outline: "inherit"
    },
  }
}, { link: true })

