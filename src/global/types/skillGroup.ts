import { ReactNode } from "react";

export type SkillGroupType = {
	name: string;
	image?: ReactNode;
	legend: boolean;
	categories: Array<{
		name: string;
		accent: string;
		skills: Array<{
			name: string;
			image?: ReactNode;
			description: string;
			github?: string;
			npm?: string;
		}>;
	}>;
};
