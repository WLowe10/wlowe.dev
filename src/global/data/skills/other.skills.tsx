import { Theme } from "@global/constants/theme";
import { SkillGroupType } from "@global/types";
import { DockerIcon, NginxIcon, GitScmIcon, PostgresqlIcon, VimIcon, MongodbIcon } from "@components/icons";

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
                    image: <DockerIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/docker"
                },
                {
                    name: "NGINX",
                    description: "test",
                    image: <NginxIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/nginx"
                },
                {
                    name: "Postgres",
                    description: "test",
                    image: <PostgresqlIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/postgres"
                },
                {
                    name: "MongoDB",
                    description: "test",
                    image: <MongodbIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/mongodb",
                },
                {
                    name: "Git",
                    description: "test",
                    image: <GitScmIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/git"
                },
                {
                    name: "Vim",
                    description: "test",
                    image: <VimIcon width={"100%"} height={"100%"}/>
                }
            ]
        },
    ]
}