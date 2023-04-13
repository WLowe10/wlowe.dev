import { useStyles } from "./styles";
import { TextField, HoverableText } from "@global/components/general";
import { DateAnnotation } from "./components";
import { BestSongs, Gym } from "./sections";
import { PageLayout } from "@global/layouts";

export const Home = () => {
    const classes = useStyles();

    return (
        <PageLayout>
            <TextField>
                <p>Hey! I'm <HoverableText text={"Wes"} />, a full stack developer with a love for coding and creating elegant applications. From the origin of Typescript and constantly learning new skills, I strive to push the boundaries of what's possible. Thanks for checking out my portfolio. This page in particular is an overview of my interests. Take a look around and see what I'm all about.</p>
            </TextField>  
            <DateAnnotation time={""}/>

            <div className={classes.separator}>
                <p className={classes.separatorText}>
                    My Interests
                </p>
            </div> 

            <div className={classes.aboutContainer}>
                <BestSongs />
                {/* <Gym /> */}
            </div>
        </PageLayout> 
    )
};    
