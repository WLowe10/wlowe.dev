import { useStyles } from "./styles";
import { SkillCard } from "./components";
import { useMediaQuery } from "react-responsive";
import { skillGroupOther, skillGroupTS } from "@global/data/skills";
import { PageLayout } from "@global/components/layouts";
import { FullFlex } from "@global/components/containers";

export const Tech = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles();

    return (
        <div className={classes.skillContainer}>
            <SkillCard skillGroup={skillGroupTS}/> 
            <SkillCard skillGroup={skillGroupOther}/> 
        </div>
    )
};    