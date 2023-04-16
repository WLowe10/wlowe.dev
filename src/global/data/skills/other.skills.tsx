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
                    description: "I use Docker to deploy my applications. Docker allows me to package my applications and their dependencies into containers that can be easily deployed and run on any platform. Its lightweight nature and ability to isolate applications and their dependencies in containers help me develop and deploy applications more efficiently. With Docker, I can streamline my development process and ensure that my applications are running smoothly in any environment.",
                    image: <DockerIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/docker"
                },
                {
                    name: "NGINX",
                    description: "I use Nginx as a web server and reverse proxy to serve and load-balance traffic for my web applications. Nginx's lightweight and high-performance architecture make it an ideal choice for handling heavy traffic and delivering content quickly. ",
                    image: <NginxIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/nginx"
                },
                {
                    name: "Postgres",
                    description: "I use PostgreSQL as a relational database management system for my web applications. PostgreSQL's powerful and reliable database engine provides me with the necessary tools to store, retrieve, and manage complex data for my applications.",
                    image: <PostgresqlIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/postgres"
                },
                {
                    name: "MongoDB",
                    description: "I use MongoDB as a NoSQL document database for my web applications. MongoDB's flexible document model allows me to store and manage data, and its scalability enables me to handle large volumes of data with high performance.",
                    image: <MongodbIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/mongodb",
                },
                {
                    name: "Git",
                    description: "I use Git as my go-to version control system to manage and collaborate on my projects. With Git, I can confidently and efficiently manage my projects and collaborate with other developers.",
                    image: <GitScmIcon width={"100%"} height={"100%"}/>,
                    github: "https://github.com/git"
                },
                {
                    name: "Vim",
                    description: "I use Vim motions to navigate and edit text efficiently while working on your projects. With Vim motions, I can work with text seamlessly and efficiently, which allows myself more time to focus on the important aspects of my projects.",
                    image: <VimIcon width={"100%"} height={"100%"}/>
                }
            ]
        },
    ]
}