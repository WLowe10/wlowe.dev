import { Portal } from "react-portal";
import { Home, Cpu, Briefcase } from "react-feather";
import { useStyles } from "./styles";
import { useMobile } from "@services/mobile/hooks";
import { useLockBodyScroll } from "@global/hooks";
import { Link } from "gatsby";
import { Theme } from "@global/constants/theme";
import { BackButton } from "@global/components/general";
import { motion } from "framer-motion";
import { variants } from "./variants.animation";
import dragonball from "@global/assets/images/dragonball.png";

export const MobileMenu = () => {
    const classes = useStyles();
    const { close } = useMobile();

    useLockBodyScroll();

    return (
        <Portal>
            <motion.nav className={classes.menu} initial={variants.closed} animate={variants.opened} exit={variants.closed}>
                <div className={classes.menuHeader}>
                    <img src={dragonball}/>
                    <BackButton variant={"exit"} onClick={close} />
                </div>
                <div className={classes.navLinks}>
                    <Link to={"/"} onClick={close} className={classes.navLink}>
                        <Home color={Theme.fontColors.primary} size={"2rem"} />
                        <p className={classes.navText}>
                            // Home
                        </p>
                    </Link>
                    <Link to={"/tech"} onClick={close} className={classes.navLink}>
                        <Cpu color={Theme.fontColors.primary} size={"2rem"}/>
                        <p className={classes.navText}>
                            // Tech
                        </p>
                    </Link>
                    <Link to={"/projects"} onClick={close} className={classes.navLink}>
                        <Briefcase color={Theme.fontColors.primary} size={"2rem"}/>
                        <p className={classes.navText}>
                            // Projects
                        </p>
                    </Link>
                </div>
            </motion.nav>
        </Portal>
    )
};