import { useStyles } from "./styles";
import { SkillCard } from "./components";
import { useMediaQuery } from "react-responsive";
import { skillGroupOther, skillGroupTS } from "@global/data/skills";
import { PageTemplate } from "@global/components/templates";

export const Tech = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles();

    return (
        <PageTemplate>
            <div className={classes.skillContainer}>
                <SkillCard skillGroup={skillGroupTS}/> 
                <SkillCard skillGroup={skillGroupOther}/> 
            </div>
        </PageTemplate>
    )
};    