import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStyles } from "./styles";
import { Map } from "react-feather";
import { Theme } from "@global/constants/theme";
import useOutsideClick from "@rooks/use-outside-click";

type Props = {
	keys: {
		name: string;
		accent: string;
	}[];
};

const legendVariants = {
	open: {
		opacity: 1,
		height: "auto",
		transition: {
			//    type: "spring",
			duration: 0.25,
		},
	},
	closed: {
		opacity: 0,
		height: 0,
		transition: {
			//    type: "spring",
			duration: 0.25,
		},
	},
};

const buttonVariants = {
	open: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		transition: {
			//    type: "spring",
		},
	},
	closed: {
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		transition: {
			//    type: "spring",
		},
	},
};

export const Legend = ({ keys }: Props) => {
	const ref = useRef(null) as any;
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	useOutsideClick(ref, () => {
		setOpen(false);
	});

	return (
		<div ref={ref} className={classes.legend}>
			<motion.button
				className={classes.legendButton}
				animate={open ? buttonVariants.open : buttonVariants.closed}
				onClick={() => setOpen((prev) => !prev)}
			>
				<Map
					size={18}
					color={
						open
							? Theme.fontColors.primary
							: Theme.fontColors.secondary
					}
				/>
			</motion.button>

			<AnimatePresence>
				{open && (
					<motion.div
						animate={legendVariants.open}
						exit={legendVariants.closed}
						initial={legendVariants.closed}
					>
						<div className={classes.legendKey}>
							{keys.map((k, idx) => (
								<p
									className={classes.legendText}
									style={{ backgroundColor: k.accent }}
									key={idx}
								>
									{k.name}
								</p>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
