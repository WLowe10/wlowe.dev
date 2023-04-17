import { useStyles } from "./styles";
import { TextField } from "@components/general";
import { DateAnnotation } from "./components";
import { BestSongs, Gym } from "./sections";

export const Home = () => {
    const classes = useStyles();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField>
                <p>Hey! I'm Wes, a full stack developer with a love for coding and creating elegant applications. From the origin of Typescript and constantly learning new skills, I strive to push the boundaries of what's possible. Thanks for checking out my portfolio. This page in particular is an overview of my interests. Take a look around and see what I'm all about.</p>
            </TextField>  
            <DateAnnotation time={"04/15/23"}/>

            <div className={classes.separator}>
                <p className={classes.separatorText}>
                    About Me
                </p>
            </div> 

            <div className={classes.aboutContainer}>
                <BestSongs />
                {/* <Gym /> */}
            </div>
        </div>
    )
};    
