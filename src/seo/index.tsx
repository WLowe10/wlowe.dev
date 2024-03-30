import { useMetadata } from "@global/hooks/index";

type Props = {
	title?: string;
};

export const SEO = ({ title }: Props) => {
	const defaultMeta = useMetadata();

	return (
		<>
			<title>{title || defaultMeta.title}</title>
		</>
	);
};
