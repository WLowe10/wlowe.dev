import { useState } from "react";
import { useStyles } from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "react-feather";
import { Theme } from "@global/constants/theme";

const chevronVariants = {
    open: {
        transform: "rotate(0deg)",
        transition: {
            type: "spring",
            damping: 10
        }

    },
    closed: {
        transform: "rotate(90deg)",
        transition: {
            type: "spring",
            damping: 10
        }
    }
};

const contentVariants = {
    open: {
       opacity: 1,
       height: "auto",
        transition: {
           type: "spring",
           duration: .25,
        }
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: {
           type: "spring",
           duration: .25,
        }
    }
};

export const CollapsableCard = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={classes.cardTitleRow}>
                <p className={classes.title}>
                    Title
                </p>

                <motion.button className={classes.expandButton} onClick={() => setOpen(prev => !prev)} variants={chevronVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                    <ChevronDown color={Theme.fontColors.secondary}/>
                </motion.button>
            </div>
            <AnimatePresence>
                {
                    open &&  <motion.div className={classes.cardContent} initial={contentVariants.closed} animate={contentVariants.open} exit={contentVariants.closed}>
                    <p>
                        hello world
                    </p>
                    <p>
                        hello world
                    </p>
                    <p>
                        hello world
                    </p>
                </motion.div>
                }
               
            </AnimatePresence>
        </div>
    )
};