import { Portal } from "react-portal";
import { Home, Cpu } from "react-feather";
import { useStyles } from "./styles";
import { useMobile } from "@features/mobile/hooks";
import { useLockBodyScroll } from "@global/hooks";
import { Link } from "gatsby";
import { Theme } from "@global/constants/theme";
import { BackButton } from "@components/general";
import { motion } from "framer-motion";
import { variants } from "./variants.animation";

export const MobileMenu = () => {
	const classes = useStyles();
	const { close } = useMobile();

	useLockBodyScroll();

	return (
		<Portal>
			<motion.nav
				className={classes.menu}
				initial={variants.closed}
				animate={variants.opened}
				exit={variants.closed}
			>
				<div className={classes.menuHeader}>
					<BackButton variant={"exit"} onClick={close} />
				</div>
				<div className={classes.navLinks}>
					<Link to={"/"} onClick={close} className={classes.navLink}>
						<Home color={Theme.fontColors.primary} size={"2rem"} />
						<p className={classes.navText}>// Home</p>
					</Link>
					<Link
						to={"/tech"}
						onClick={close}
						className={classes.navLink}
					>
						<Cpu color={Theme.fontColors.primary} size={"2rem"} />
						<p className={classes.navText}>// Tech</p>
					</Link>
				</div>
			</motion.nav>
		</Portal>
	);
};
