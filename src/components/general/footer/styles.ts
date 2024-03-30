import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	footer: {
		paddingTop: "5rem",
	},
	content: {
		padding: "2rem",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	madeWith: {
		fontFamily: Families.NunitoSans,
		fontWeight: Weights.NunitoSans[600],
		color: Theme.fontColors.secondary,
		fontSize: Sizes.Default,
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	connections: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: 10,
	},
	"@media (max-width: 768px)": {
		content: {
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
		madeWith: {
			marginBottom: "2rem",
		},
	},
});
