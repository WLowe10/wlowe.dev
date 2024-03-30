import { graphql, useStaticQuery } from "gatsby";

export const useMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					siteUrl
				}
			}
		}
	`);

	return data.site.siteMetadata;
};

//twitterUsername
//image
