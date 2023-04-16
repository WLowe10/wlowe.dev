import { GithubIcon } from "@components/icons"

type Props = {
    href: string
}

export const GithubLink = ({ href }: Props) => {
    return (
        <a href={href} target={"_blank"}>
            <GithubIcon width={16} height={16} />
        </a>
    )
}