import { Theme } from "@global/constants/theme";
import { SkillGroupType } from "@global/types";
import { TypescriptlangIcon, ReactjsIcon, ExpressjsIcon, NestjsIcon, TypeormIcon, StripeIcon, JssIcon, ZodIcon, ElectronjsIcon, FramerIcon, NextjsIcon } from "@global/components/icons";
// import zustand from "@global/assets/images/zustand.png";
// import Image from "next/image";

const iconSize = 24;

export const skillGroupTS: SkillGroupType = {
    name: "TypeScript",
    image: <TypescriptlangIcon height={iconSize * 1.75} width={iconSize * 1.75} style={{borderRadius: 8, backgroundColor: "white"}}/>,
    legend: true,
    categories: [
        {
            name: "Frontend",
            accent: "#415EDA",
            skills: [
                {
                    name: "React",
                    image: <ReactjsIcon />,
                    description: "I use React JS to build dynamic and interactive user interfaces for my web applications. By utilizing JSX syntax and components, I am able to create reusable and modular code. With React, I am able to build high-performing and responsive web experiences.",
                    github: "https://github.com/facebook/react",
                    npm: "https://www.npmjs.com/package/react"
                },
                {
                    name: "NextJS",
                    image: <NextjsIcon />,
                    description: "I use React JS to build dynamic and interactive user interfaces for my web applications. By utilizing JSX syntax and components, I am able to create reusable and modular code. With React, I am able to build high-performing and responsive web experiences.",
                    github: "https://github.com/vercel/next.js/",
                    npm: "https://www.npmjs.com/package/next"
                },
                {
                    name: "Framer Motion",
                    image: <FramerIcon />,
                    description: "I use React JS to build dynamic and interactive user interfaces for my web applications. By utilizing JSX syntax and components, I am able to create reusable and modular code. With React, I am able to build high-performing and responsive web experiences.",
                    github: "https://github.com/framer/motion",
                    npm: "https://www.npmjs.com/package/framer-motion"
                },
                {
                    name: "React-JSS",
                    image: <JssIcon fill={"white"} color={"white"} />,
                    description: "I use react-jss to easily style my React components in a dynamic and organized way. This allows me to keep my styles modular and maintainable, while still being able to bring my designs to life with the flexibility of JSS.",
                    github: "https://github.com/cssinjs/jss",
                    npm: "https://www.npmjs.com/package/react-jss"
                },
                // {
                //     name: "Zustand",
                //     image: <Image height={iconSize} width={iconSize} src={zustand} style={{borderRadius: 4}} alt={"zustand"}/>,
                //     description: "I use Zustand for state management in my React projects. It is a lightweight library that allows me to create and manage global state by creating a store. Zustand makes it easy for me to manage state in a simple, efficient and predictable way.",
                //     github: "https://github.com/pmndrs/zustand",
                //     npm: "https://www.npmjs.com/package/zustand"
                // }
            ]
        },
        {
            name: "Desktop",
            accent: "#4c00b0",
            skills: [
                {
                    name: "Electron",
                    image: <ElectronjsIcon />,
                    description: "I use React Native to build cross-platform mobile applications. It's a framework that allows me to use React to build mobile apps for both iOS and Android. I can write code once and reuse it across different platforms, while still being able to access native features of the device.",
                    github: "https://github.com/electron/electron",
                    npm: "https://www.npmjs.com/package/electron"
                },
            ]
        },
        {
            name: "Mobile",
            accent: "#FF5E6A",
            skills: [
                {
                    name: "React Native",
                    image: <ReactjsIcon />,
                    description: "I use React Native to build cross-platform mobile applications. It's a framework that allows me to use React to build mobile apps for both iOS and Android. I can write code once and reuse it across different platforms, while still being able to access native features of the device",
                    github: "https://github.com/facebook/react-native",
                    npm: "https://www.npmjs.com/package/react-native"
                },
                {
                    name: "Reanimated",
                    description: "I use React Native to build cross-platform mobile applications. It's a framework that allows me to use React to build mobile apps for both iOS and Android. I can write code once and reuse it across different platforms, while still being able to access native features of the device.",
                    github: "https://github.com/software-mansion/react-native-reanimated",
                    npm: "https://github.com/software-mansion/react-native-reanimated"
                }
            ]
        },
        {
            name: "Backend",
            accent: "#8F8CB8",
            skills: [
                {
                    name: "Express",
                    image: <ExpressjsIcon fill={Theme.fontColors.primary}/>,
                    description: "I use Express JS to build the server-side of my web applications. It's a minimal and flexible Node.js web application framework that allows me to set up routes, handle HTTP requests and responses, and define middleware to add extra functionality to my server. Express is always my go to choice for building robust and efficient backends for my web projects.",
                    github: "https://github.com/expressjs/express",
                    npm: "https://www.npmjs.com/package/express"
                },
                {
                    name: "Nest",
                    image: <NestjsIcon />,
                    description: "I use Express JS to build the server-side of my web applications. It's a minimal and flexible Node.js web application framework that allows me to set up routes, handle HTTP requests and responses, and define middleware to add extra functionality to my server. Express is always my go to choice for building robust and efficient backends for my web projects.",
                    github: "https://github.com/nestjs/nest",
                    npm: "https://www.npmjs.com/package/@nestjs/core"
                },
                {
                    name: "TypeORM",
                    // image: <TypeormIcon  />,
                    description: "I use TypeORM for database management in my projects. It's a powerful and flexible ORM that supports multiple database management systems like MySQL, PostgreSQL, and MongoDB; I mainly use it with PostgreSQL. It allows me to define my database schema using classes, and then use the provided API to perform CRUD operations, perform queries and define relations. TypeORM makes it easy for me to manage and interact with my databases in a type-safe and organized way.",
                    github: "https://github.com/typeorm/typeorm",
                    npm: "https://www.npmjs.com/package/typeorm"
                }
            ]
        },
        {
            name: "Universal",
            accent: "#464555",
            skills: [
                {
                    name: "Zod",
                    image: <ZodIcon />,
                    description: "I use Zod for input validation in my TypeScript projects. It's a lightweight and powerful validation library that allows me to define validation schema and constraints for my inputs.",
                    github: "https://github.com/colinhacks/zod",
                    npm: "https://www.npmjs.com/package/zod"
                },
                {
                    name: "StripeJS",
                    image: <StripeIcon />,
                    description: "I use Stripe.js to handle payments in my web applications. It's a powerful and secure JavaScript library that allows me to easily integrate Stripe's payment system into my project.",
                    github: "https://github.com/stripe/stripe-js",
                    npm: "https://www.npmjs.com/package/@stripe/stripe-js"
                }
            ]
        }
    ]
}
