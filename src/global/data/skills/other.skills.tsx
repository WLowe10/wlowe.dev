import { Theme } from "@global/constants/theme";
import { SkillGroupType } from "@global/types";
import { DockerIcon, NginxIcon, GitScmIcon, PostgresqlIcon, VimIcon, MongodbIcon } from "@global/components/icons";

export const skillGroupOther: SkillGroupType = {
    name: "Other",
    legend: false,
    categories: [
        {
            name: "Main",
            accent: "#464555",
            skills: [
                {
                    name: "Docker",
                    description: "test",
                    image: <DockerIcon />,
                    github: "https://github.com/docker"
                },
                {
                    name: "NGINX",
                    description: "test",
                    image: <NginxIcon />,
                    github: "https://github.com/nginx"
                },
                {
                    name: "Postgres",
                    description: "test",
                    image: <PostgresqlIcon />,
                    github: "https://github.com/postgres"
                },
                {
                    name: "MongoDB",
                    description: "test",
                    image: <MongodbIcon />,
                    github: "https://github.com/mongodb",
                },
                {
                    name: "Git",
                    description: "test",
                    image: <GitScmIcon />,
                    github: "https://github.com/git"
                },
                {
                    name: "Vim",
                    description: "test",
                    image: <VimIcon />
                }
            ]
        },
    ]
}