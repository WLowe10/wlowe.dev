import { SVGProps } from "react";
const SvgNpmjsIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		preserveAspectRatio="xMidYMid"
		{...props}
	>
		<path d="M0 0h32v32H0z" opacity={1} fill="#cb3837" />
		<path
			d="M5.364 26.636h10.543V10.728h5.364v15.908h5.364V5.364H5.364z"
			fill="#fff"
		/>
	</svg>
);
export default SvgNpmjsIcon;
