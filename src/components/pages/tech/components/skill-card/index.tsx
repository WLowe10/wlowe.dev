import { useState, ReactNode, useEffect } from "react";
import { MainTech, TechInfo } from "./sections";
import { useStyles } from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { SkillGroupType, TechDetailsType } from "@global/types";
import { mainVariants, detailsVariants } from "./variants.animation";
import useMeasure from "react-use-measure";

type Props = {
	skillGroup: SkillGroupType;
};

//!!solve padding issue later

export const SkillCard = ({ skillGroup }: Props) => {
	const classes = useStyles();
	const [techDetails, setTechDetails] = useState<TechDetailsType | null>(
		null,
	);
	const [measureRef, { height, width }] = useMeasure();

	const setTech = (techDetails: TechDetailsType) => {
		setTechDetails(techDetails);
	};

	const clearTech = () => {
		setTechDetails(null);
	};

	return (
		//?possibly improve this transition
		//?fix width not animating
		<motion.div animate={{ height }} className={classes.skillCard}>
			<div ref={measureRef} style={{ position: "relative" }}>
				<AnimatePresence initial={false}>
					{!techDetails ? (
						<motion.div
							style={{ width: "100%" }}
							initial={mainVariants.exit}
							animate={{
								...mainVariants.enter,
								position: "static",
							}}
							exit={{
								...mainVariants.exit,
								position: "absolute",
							}}
							key={"main"}
						>
							<MainTech
								skillGroup={skillGroup}
								setTech={setTech}
							/>
						</motion.div>
					) : (
						<motion.div
							style={{ width: "100%" }}
							initial={detailsVariants.exit}
							animate={{
								...detailsVariants.enter,
								position: "static",
							}}
							exit={{
								...detailsVariants.exit,
								position: "absolute",
							}}
							key={"info"}
						>
							<TechInfo
								details={techDetails}
								clearTech={clearTech}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};
