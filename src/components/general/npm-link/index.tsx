import { NpmjsIcon } from "@components/icons"

type Props = {
    href: string
}

export const NpmLink = ({ href }: Props) => {
    return (
        <a href={href} target={"_blank"}>
            <NpmjsIcon width={16} height={16} />
        </a>
    )
}