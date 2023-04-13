import { useStyles } from "./styles";
import { Mail, Grid, Menu } from "react-feather";
import { Theme } from "@global/constants/theme";
import { RouteTypes, RouteList } from "@global/constants/routes";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "../mobile-menu";
import { motion } from "framer-motion";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { PresenceBar } from "../presence-bar";
import { Link } from "gatsby";

export const TopBar = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const data = useStaticQuery(graphql`
        query {
            flag: file(relativePath: { eq: "usa_flag.gif" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const flag = getImage(data.flag);
    // const location = router.asPath;

    return (
        <div className={classes.topBar}>
            {
                !isMobile && <PresenceBar />
            }
            <div className={classes.navContainer}>
                <h1 className={classes.title}>
                    wes lowe
                </h1>
                {
                    isMobile ? (
                        <Menu color={Theme.fontColors.primary}/>
                    ) : (
                        RouteList.map((route, index) => {
                            // if (route.path == RouteTypes.Contact) return <a href={route.path} key={index}><Mail color={location == route.path ? Theme.fontColors.secondary : Theme.accents.grey} /></a>
                            return <Link to={route.path} style={{backgroundColor: "white"}} className={classes.navElement} key={index} />
                            // return <a className={location == route.path ? classes.navElementActive : classes.navElement} href={route.path} key={index}>{route.name}</a>
                        })
                    )
                }
            </div>
        </div>
    )
};