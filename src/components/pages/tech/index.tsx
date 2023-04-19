import { useStyles } from "./styles";
import { SkillCard } from "./components";
import { useMediaQuery } from "react-responsive";
import { skillGroupOther, skillGroupTS } from "@global/data/skills";
import { PageLayout } from "@components/layouts";
import { FullFlex } from "@components/containers";

export const Tech = () => {
    const classes = useStyles();

    return (
        <div className={classes.skillContainer}>
            <SkillCard skillGroup={skillGroupTS}/> 
            <SkillCard skillGroup={skillGroupOther}/> 
        </div>
    )
};    