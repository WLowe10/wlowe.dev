import { useStyles } from "./styles";
import { Mail, Grid, Menu } from "react-feather";
import { Theme } from "@global/constants/theme";
import { RouteTypes, RouteList } from "@global/constants/routes";
import { useMediaQuery } from "react-responsive";
import { useLocalTime } from "@global/hooks";
import { MobileMenu } from "../mobile-menu";
import { motion } from "framer-motion";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import usFlag from "@global/assets/images/usa_flag.gif";

export const TopBar = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const { time } = useLocalTime();

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
            <div className={classes.presence}>
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    {/* <Image src={usflagGif} height={24} alt={"united states"}/>                     */}
                    <StaticImage src={usFlag} alt={"US-FLAG"} />
                    <p className={classes.presenceText}>
                        United States
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className={classes.presenceText}>
                        {
                            time
                        }
                    </motion.p>
                    <p className={classes.presenceText}>
                        &#8226;
                    </p>
                    <p className={classes.presenceText}>
                        in Kansas
                    </p>
                </div>
            </div>
            <div className={classes.navContainer}>
                <h1 className={classes.title}>
                    wes lowe
                </h1>
                {
                    // isMobile ? (
                    //     <Menu color={Theme.fontColors.primary}/>
                    // ) : (
                    //     RouteList.map((route, index) => {
                    //         if (route.path == RouteTypes.Contact) return <a href={route.path} key={index}><Mail color={location == route.path ? Theme.fontColors.secondary : Theme.accents.grey} /></a>
                    //         return <a className={location == route.path ? classes.navElementActive : classes.navElement} href={route.path} key={index}>{route.name}</a>
                    //     })
                    // )
                }
            </div>
        </div>
    )
};