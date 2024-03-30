import { useStyles } from "./styles";
import { Connection } from "../connection";
import { Feather, GitHub, Linkedin, Mail, Twitter } from "react-feather";
import { Theme } from "@global/constants/theme";
import { motion } from "framer-motion";

const heartVariants = {
	hover: {
		scale: [1, 1.5, 0.5, 1],
		transition: {
			duration: ".5",
			repeat: Infinity,
		},
	},
	initial: {
		scale: 1,
	},
};

export const Footer = () => {
	const classes = useStyles();

	return (
		<motion.footer whileHover={"hover"} className={classes.footer}>
			<div className={classes.content}>
				<div className={classes.madeWith}>
					<p style={{ marginBottom: 10 }}>Made with</p>
					<motion.div
						initial={heartVariants.initial}
						variants={heartVariants}
					>
						❤️
					</motion.div>
				</div>

				<div className={classes.connections}>
					<Connection
						href={"https://github.com/WLowe10"}
						display={"WLowe10"}
						icon={<GitHub color={Theme.accents.blue} />}
					/>
					<Connection
						href={"https://www.linkedin.com/in/wes-lowe-299919251/"}
						display={"Wes Lowe"}
						icon={<Linkedin color={Theme.accents.blue} />}
					/>
					<Connection
						href={"mailto:wesley.lowe@yahoo.com"}
						display={"wesley.lowe@yahoo.com"}
						icon={<Mail color={Theme.accents.blue} />}
					/>
					<Connection
						href={"../resume.pdf"}
						display={"Resume"}
						icon={<Feather color={Theme.accents.blue} />}
					/>
				</div>
			</div>
		</motion.footer>
	);
};
