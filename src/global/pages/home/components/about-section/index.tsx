import { ReactNode } from "react";
import { Music } from "react-feather";
import { useStyles } from "./styles";
import { useMediaQuery } from 'react-responsive'

type Props = {
    children: ReactNode,
    title: string
};

export const AboutSection = ({children, title}: Props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className={classes.aboutSection}>
            <div>
                <span style={{backgroundColor: "#41"}}/>
                <p className={classes.aboutTitle}>{title}</p>
            </div>
            <div className={classes.content}>
                {
                    children
                }
            </div>
        </div>
    )
};