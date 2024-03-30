import { useStyles } from "./styles";
import { Menu } from "react-feather";
import { Theme } from "@global/constants/theme";
import { RouteList, RouteTypes } from "@global/constants/routes";
import { PresenceBar } from "../presence-bar";
import { useMobile } from "@features/mobile/hooks";
import { Link } from "gatsby";

export const TopBar = () => {
	const { open } = useMobile();
	const classes = useStyles();

	return (
		<nav className={classes.topBar}>
			<div className={classes.presence}>
				<PresenceBar />
			</div>
			<div className={classes.navContainer}>
				<Link className={classes.title} to={RouteTypes.Home}>
					wes lowe
				</Link>
				<Menu
					className={classes.mobile}
					color={Theme.fontColors.primary}
					onClick={open}
				/>
				<div className={classes.navLinks}>
					{RouteList.map((route, index) => {
						return (
							<Link
								to={route.path}
								className={classes.navElement}
								activeClassName={classes.navElementActive}
								key={index}
							>
								{route.name}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
