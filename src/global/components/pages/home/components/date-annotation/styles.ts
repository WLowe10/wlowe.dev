import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    dateAnnotation: {
        fontFamily: Families.Ubuntu,
        fontWeight: Weights.Ubuntu[400],
        color: Theme.accents.grey
    }
});