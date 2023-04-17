import { FullFlex } from "@components/containers";
import { ProjectCard } from "./components";
import { useStyles } from "./styles";
import { PageLayout } from "@components/layouts";
import { projectsData } from "@global/data/projects";

export const Projects = () => {
    const classes = useStyles();

    return (
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
    )
};