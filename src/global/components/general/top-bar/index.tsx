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
    // const path = window.location.pathname.toLowerCase();

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
                            // const selected = path.includes(route.name.toLowerCase());
                            const selected = false;

                            return (
                                <Link to={route.path} className={selected ? classes.navElementActive : classes.navElement} key={index}>
                                    {
                                        route.name
                                    }
                                </Link>
                            )
                            // return <a className={location == route.path ? classes.navElementActive : classes.navElement} href={route.path} key={index}>{route.name}</a>
                        })
                    )
                }
            </div>
        </div>
    )
};