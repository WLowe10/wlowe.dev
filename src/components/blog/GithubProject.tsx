import { useState, useEffect } from "react";

type Props = {
    href: string
}

async function fetchRepo(username: string, repo: string) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    const body = await response.json();

    return body;
}

export const useGithubRepo = (url: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [repo, setRepo] = useState<Record<string, any>>({});

    useEffect(() => {
        setIsLoading(true);

        const parts = url.split('/');
        const username = parts[3];
        const repo = parts[4];

        fetchRepo(username, repo).then(data => {
            setIsLoading(false);
            setRepo(data);
        });
    }, [url])

    return {
        data: repo,
        isLoading: isLoading,
    };
}

export const GithubProject = ({ href }: Props) => {
    const { data, isLoading } = useGithubRepo(href);
    const name = data.name;
    const stars = data.stargazers_count;

    return (
        <a href={href} target="_blank" className="flex justify-between rounded-md p-2 ring-1 ring-slate-200 no-underline">
            <p>
                {
                    name
                }
            </p>
            <p>
                {
                    stars
                }
            </p>
        </a>
    )
}