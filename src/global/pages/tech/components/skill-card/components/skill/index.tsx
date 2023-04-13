import { ReactNode } from "react";
import { useStyles } from "./styles";
import { ChevronRight } from "react-feather";
import { Theme } from "@global/constants/theme";
import { acronym } from "@global/utils";

type Props = {
    name: string,
    accent: string,
    image?: ReactNode
};

export const Skill = ({ name, accent, image}: Props) => {
    const classes = useStyles();
    const nameAcronym = acronym(name);

    return (
        <div className={classes.skill} style={{backgroundColor: accent}}>
            <div className={classes.skillImage}>
                {
                    image ? ( image ) : <p className={classes.skillAcronym}>{nameAcronym}</p>
                }
            </div>
            <p className={classes.skillTitle}>
                {
                    name
                }
            </p>
            <div className={classes.arrowContainer}>
                <ChevronRight color={Theme.fontColors.primary}/>
            </div>
        </div>
    )
};

