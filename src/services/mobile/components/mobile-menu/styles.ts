import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Sizes, Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
	menu: {
		position: "fixed",
		zIndex: 99,
		top: 0,
		left: 0,
		right: 0,
		height: "100vh",
		backgroundColor: Theme.accents.dark,
		padding: "2rem",
	},
	menuHeader: {
		fontFamily: Families.SaiyanSans,
		color: Theme.fontColors.primary,
		fontSize: Sizes.Large,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		margin: {
			bottom: "2rem",
		},
	},
	navLinks: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
	navLink: {
		display: "flex",
		width: "100%",
		flexDirection: "row",
		gap: "1rem",
		textDecoration: "none",
		justifyContent: "space-between",
		alignItems: "center",
	},
	navText: {
		fontFamily: Families.NunitoSans,
		fontWeight: Weights.NunitoSans[700],
		color: Theme.fontColors.secondary,
	},
});
