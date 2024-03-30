import { ChevronLeft, X } from "react-feather";
import { useStyles } from "./styles";
import { Theme } from "@global/constants/theme";

type Props = {
	onClick: () => any;
	variant?: "back" | "exit";
};

export const BackButton = ({ onClick, variant = "back" }: Props) => {
	const classes = useStyles();

	return (
		<button className={classes.backButton} onClick={onClick}>
			{variant == "back" ? (
				<ChevronLeft color={Theme.fontColors.primary} />
			) : (
				<X color={Theme.fontColors.primary} />
			)}
		</button>
	);
};
