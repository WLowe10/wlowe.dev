import { useStyles } from "./styles";
import {
	FramerIcon,
	GatsbyIcon,
	GithubIcon,
	JssIcon,
	NestjsIcon,
	PostgresqlIcon,
	TypescriptlangIcon,
} from "@components/icons";
import { motion } from "framer-motion";
import { ElectronjsIcon } from "@components/icons";
import { ReactjsIcon } from "@components/icons";
import YouTubePlayer from "react-youtube";
import { Link } from "gatsby";

type Props = {
	name: string;
	description: string;
	open: boolean;
	link?: string;
	youtube?: string;
	tech: Array<string>;
};

const techIconsMap: Record<string, any> = {
	typescript: TypescriptlangIcon,
	react: ReactjsIcon,
	electron: ElectronjsIcon,
	gatsby: GatsbyIcon,
	jss: JssIcon,
	nest: NestjsIcon,
	postgres: PostgresqlIcon,
	framer: FramerIcon,
};

export const ProjectCard = ({
	name,
	description,
	open,
	link,
	youtube,
	tech,
}: Props) => {
	const classes = useStyles();

	return (
		<motion.a
			href={link}
			target={"_blank"}
			className={classes.projectCard}
			whileHover={{ borderColor: "rgba(255,255,255,0.7)" }}
		>
			<div className={classes.cardHeader}>
				<h1>{name}</h1>
				{open ? (
					<GithubIcon height={16} />
				) : (
					<p style={{ fontSize: 16 }}>🔒</p>
				)}
			</div>
			<div className={classes.cardBody}>
				<p>{description}</p>
			</div>
			<div className={classes.youtube}>
				{youtube && <YouTubePlayer videoId={youtube} />}
			</div>
			<div className={classes.techContainer}>
				{tech.map((t, idx) => {
					const Icon = techIconsMap[t];

					return (
						<div className={classes.techIcon} key={idx}>
							<Icon height={"100%"} width={"100%"} />
						</div>
					);
				})}
			</div>
		</motion.a>
	);
};
