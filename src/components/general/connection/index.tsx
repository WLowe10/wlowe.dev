import { useStyles } from "./styles";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
	href: string;
	display: string;
	icon: ReactNode;
};

const iconVariants = {
	hover: {
		transform: "rotate(-30deg)",
	},
};

export const Connection = ({ href, icon, display }: Props) => {
	const classes = useStyles();

	return (
		<motion.a
			whileHover={"hover"}
			className={classes.connection}
			href={href}
			target={"_blank"}
		>
			<motion.div variants={iconVariants}>{icon}</motion.div>

			<p className={classes.connectionText}>{display}</p>
		</motion.a>
	);
};
