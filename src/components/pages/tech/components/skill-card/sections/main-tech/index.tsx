import { useStyles } from "./styles"; 
import { Legend } from "../../components/legend";
import { Skill } from "../../components/skill";
import { SkillGroupType, TechDetailsType } from "@global/types";

type Props = {
    skillGroup: SkillGroupType,
    setTech: (techDetails: TechDetailsType) => void,
};

export const MainTech = ({skillGroup, setTech}: Props) => {
    const classes = useStyles();
    const keys = skillGroup.categories.map(c => ({name: c.name, accent: c.accent}))

    return (
        <div className={classes.mainContainer}> 
            <div className={classes.header}>
                <div className={classes.head}> 
                    <div className={classes.headImage}>
                        {
                            skillGroup.image
                        }
                    </div>
                    <h1 className={classes.title}>{skillGroup.name}</h1>
                </div>
                <Legend keys={keys}/>
            </div>
            <div className={classes.skillContainer}>
                {
                    skillGroup.categories.map((cat) => {
                        return (
                            cat.skills.map((s, index) => (
                                <button style={{display: "flex"}} key={index} onClick={() => setTech({
                                    name: s.name, 
                                    description: s.description,
                                    pill: { color: cat.accent, text: cat.name },
                                    github: s.github,
                                    npm: s.npm
                                })}>
                                    <Skill name={s.name} accent={cat.accent} image={s.image} key={index}/>
                                </button>
                            )) 
                        )
                    })
                }
            </div>
        </div>
    )
};
