import { useStyles } from "./styles";
import { AboutSection } from "../../components";

export const Gym = () => {
    const classes = useStyles();

    return (
        <AboutSection title={"🏋️ Gym"}>
            <div className={classes.gym}>
            </div>
        </AboutSection>
    )
};