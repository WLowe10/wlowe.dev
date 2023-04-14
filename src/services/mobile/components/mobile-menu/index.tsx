import { Portal } from "react-portal";
import { Home, Cpu, Briefcase } from "react-feather";
import { useStyles } from "./styles";
import { useMobile } from "@services/mobile/hooks";
import { useLockBodyScroll } from "@global/hooks";
import { Link } from "gatsby";
import { Theme } from "@global/constants/theme";

export const MobileMenu = () => {
    const classes = useStyles();
    const { close } = useMobile();

    useLockBodyScroll();

    return (
        <Portal>
            <nav className={classes.menu}>
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
            </nav>
        </Portal>
    )
};