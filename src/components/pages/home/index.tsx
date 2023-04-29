import { useStyles } from "./styles";
import { TextField } from "@components/general";
import { DateAnnotation, ProjectCard } from "./components";
import { projectsData } from "@global/data/projects";

export const Home = () => {
    const classes = useStyles();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField>
                <p>Hey! I'm Wes, a full stack developer with a love for coding and creating elegant applications. From the origin of Typescript and constantly learning new skills, I strive to push the boundaries of what's possible. Thanks for checking out my portfolio.</p>
            </TextField>  
            <DateAnnotation time={"04/15/23"}/>

            <div className={classes.separator}>
                <p className={classes.separatorText}>
                    Projects
                </p>
            </div> 

            <div className={classes.projectsContainer}>
            {
                projectsData.map((p, idx) => (
                    <ProjectCard 
                        {
                            ...p
                        }
                        key={idx}
                    />
                ))
            }
            </div>
        </div>
    )
};    
