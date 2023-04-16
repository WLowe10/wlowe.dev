import { Theme } from "@global/constants/theme";
import { SkillGroupType } from "@global/types";
import { TypescriptlangIcon, ReactjsIcon, ExpressjsIcon, NestjsIcon, TypeormIcon, StripeIcon, JssIcon, ZodIcon, ElectronjsIcon, FramerIcon, NextjsIcon, GatsbyIcon } from "@components/icons";
import zustand from "@global/assets/images/zustand.png";

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
                    image: <ReactjsIcon width={"100%"} height={"100%"} />,
                    description: "I use React JS to build dynamic and interactive user interfaces for my web applications. By utilizing JSX syntax and components, I am able to create reusable and modular code. With React, I am able to build high-performing and responsive web experiences.",
                    github: "https://github.com/facebook/react",
                    npm: "https://www.npmjs.com/package/react"
                },
                {
                    name: "Gatsby",
                    image: <GatsbyIcon width={"100%"} height={"100%"}/>,
                    description: "I use Gatsby to build fast applications with React. Gatsby provides a framework for building static websites and web applications with features like GraphQL data querying, automatic code splitting, and optimized image loading.",
                    github: "https://github.com/vercel/next.js/",
                    npm: "https://www.npmjs.com/package/next"
                },
                {
                    name: "NextJS",
                    image: <NextjsIcon width={"100%"} height={"100%"}/>,
                    description: "I use Next.js to build server-rendered React applications with ease. Next.js simplifies my development workflow by allowing me to focus on building my application instead of setting up complex build processes.",
                    github: "https://github.com/vercel/next.js/",
                    npm: "https://www.npmjs.com/package/next"
                },
                {
                    name: "Framer Motion",
                    image: <FramerIcon width={"100%"} height={"100%"}/>,
                    description: "I use React JS to build dynamic and interactive user interfaces for my web applications. By utilizing JSX syntax and components, I am able to create reusable and modular code. With React, I am able to build high-performing and responsive web experiences.",
                    github: "https://github.com/framer/motion",
                    npm: "https://www.npmjs.com/package/framer-motion"
                },
                {
                    name: "React-JSS",
                    image: <JssIcon fill={"white"} color={"white"} width={"100%"} height={"100%"} />,
                    description: "I use react-jss to easily style my React components in a dynamic and organized way. This allows me to keep my styles modular and maintainable, while still being able to bring my designs to life with the flexibility of JSS.",
                    github: "https://github.com/cssinjs/jss",
                    npm: "https://www.npmjs.com/package/react-jss"
                },
                {
                    name: "Zustand",
                    image: <img height={iconSize} width={iconSize} src={zustand} style={{borderRadius: 4}} alt={"zustand"}/>,
                    description: "I use Zustand for state management in my React projects. It is a lightweight library that allows me to create and manage global state by creating a store. Zustand makes it easy for me to manage state in a simple, efficient and predictable way.",
                    github: "https://github.com/pmndrs/zustand",
                    npm: "https://www.npmjs.com/package/zustand"
                }
            ]
        },
        {
            name: "Desktop",
            accent: "#4c00b0",
            skills: [
                {
                    name: "Electron",
                    image: <ElectronjsIcon width={"100%"} height={"100%"}/>,
                    description: "I use ElectronJS with ReactJS to create cross-platform desktop applications using web technologies. ElectronJS allows me to package web applications as native desktop apps, giving me the flexibility to build powerful and feature-rich applications while using the web development skills I already have.",
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
                    image: <ReactjsIcon width={"100%"} height={"100%"}/>,
                    description: "I use React Native to build cross-platform mobile applications. It's a framework that allows me to use React to build mobile apps for both iOS and Android. I can write code once and reuse it across different platforms, while still being able to access native features of the device",
                    github: "https://github.com/facebook/react-native",
                    npm: "https://www.npmjs.com/package/react-native"
                },
                {
                    name: "Reanimated",
                    description: "I use React Native Reanimated to create high-performance animations and interactions for my mobile applications. Its declarative API and pre-built animation primitives allow me to create complex animations with minimal code. Additionally, its integration with Gesture Handler enables me to create sophisticated touch and gesture interactions for my applications",
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
                    image: <ExpressjsIcon fill={Theme.fontColors.primary} width={"100%"} height={"100%"}/>,
                    description: "I use Express JS to build the server-side of my web applications. It's a minimal and flexible Node.js web application framework that allows me to set up routes, handle HTTP requests and responses, and define middleware to add extra functionality to my server. Express is always my go to choice for building robust and efficient backends for my web projects.",
                    github: "https://github.com/expressjs/express",
                    npm: "https://www.npmjs.com/package/express"
                },
                {
                    name: "Nest",
                    image: <NestjsIcon width={"100%"} height={"100%"}/>,
                    description: "I use NestJS to build server-side applications with TypeScript. NestJS's opinionated project structure and support for dependency injection, decorators, and middleware make it easy to develop scalable and maintainable web applications. Its seamless integration with popular libraries like TypeORM enables me to quickly build complex backends for my web projects.",
                    github: "https://github.com/nestjs/nest",
                    npm: "https://www.npmjs.com/package/@nestjs/core"
                },
                {
                    name: "TypeORM",
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
                    image: <ZodIcon width={"100%"} height={"100%"}/>,
                    description: "I use Zod for input validation in my TypeScript projects. It's a lightweight and powerful validation library that allows me to define validation schema and constraints for my inputs.",
                    github: "https://github.com/colinhacks/zod",
                    npm: "https://www.npmjs.com/package/zod"
                },
                {
                    name: "StripeJS",
                    image: <StripeIcon width={"100%"} height={"100%"}/>,
                    description: "I use Stripe.js to handle payments in my web applications. It's a powerful and secure JavaScript library that allows me to easily integrate Stripe's payment system into my project.",
                    github: "https://github.com/stripe/stripe-js",
                    npm: "https://www.npmjs.com/package/@stripe/stripe-js"
                }
            ]
        }
    ]
}
