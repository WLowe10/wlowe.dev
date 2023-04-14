import { useStyles } from "./styles";
import { SkillCard } from "./components";
import { useMediaQuery } from "react-responsive";
import { skillGroupOther, skillGroupTS } from "@global/data/skills";
import { PageLayout } from "@global/components/layouts";

export const Tech = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles();

    return (
        <PageLayout>
            <div className={classes.skillContainer}>
                <SkillCard skillGroup={skillGroupTS}/> 
                <SkillCard skillGroup={skillGroupOther}/> 
            </div>
        </PageLayout>
    )
};    