import { useStyles } from "./styles";
import { Menu } from "react-feather";
import { Theme } from "@global/constants/theme";
import { RouteList } from "@global/constants/routes";
import { useMediaQuery } from "react-responsive";
import { PresenceBar } from "../presence-bar";
import { useMobile } from "@services/mobile/hooks";
import { Link } from "gatsby";

export const TopBar = () => {
    const { open } = useMobile();
    const classes = useStyles();
    // const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    // const path = window.location.pathname.toLowerCase();

    return (
        <div className={classes.topBar}>
            <div className={classes.presence}>
                <PresenceBar />
            </div>
            <div className={classes.navContainer}>
                <h1 className={classes.title}>
                    wes lowe
                </h1>
                <div className={classes.mobile}>
                    <Menu color={Theme.fontColors.primary} onClick={open}/>
                </div>
                <div className={classes.navLinks}>
                {
                        RouteList.map((route, index) => {
                            return (
                                <Link to={route.path} className={classes.navElement} activeClassName={classes.navElementActive} key={index}>
                                    {
                                        route.name
                                    }
                                </Link>
                            )
                        })
                }
                </div>
            </div>
        </div>
    )
};