import { useState, ReactNode } from "react";
import { useStyles } from "./styles";
import { motion } from "framer-motion";
import { Mail } from "react-feather";
import { Theme } from "@global/constants/theme";

type Props = {
    text: string,
    children?: ReactNode
}

const variants = {
    visible: { 
        opacity: 1,
        transition: {
            duration: .25,
        }
    },
    hidden: { 
        opacity: 0,
        transition: {
            duration: .25,
        }
     }
};

//!animation does not work when un-hoveringm there is no transition duration

export const HoverableText = ({children, text}: Props) => {
    const classes = useStyles();
//!change while hover to use state
    return (
        <motion.span className={classes.hoverContainer} whileHover={"visible"} initial={"hidden"}>
            <span className={classes.text}>
                { text }
            </span>
            <motion.span className={classes.modalContent} variants={variants}>
                <Mail color={Theme.fontColors.secondary} />
            </motion.span>
        </motion.span>
    )
};