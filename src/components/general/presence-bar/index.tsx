import { useStyles } from "./styles";
import { motion } from "framer-motion";
import { useLocalTime } from "@global/hooks/index";
import { StaticImage } from "gatsby-plugin-image";
import usFlag from "@global/assets/images/usa_flag.gif";

export const PresenceBar = () => {
	const classes = useStyles();
	const { time } = useLocalTime();

	return (
		<div className={classes.presence}>
			<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
				<img src={usFlag} height={24} />
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={classes.presenceText}
				>
					{time}
				</motion.p>
				<p className={classes.presenceText}>&#8226;</p>
				<p className={classes.presenceText}>in Kansas</p>
			</div>
		</div>
	);
};
