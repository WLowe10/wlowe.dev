import { SVGProps } from "react";
const SvgDockerIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
		<rect width={512} height={512} rx="15%" fill="#066da5" />
		<path
			fill="#fff"
			d="M296 245h42v-38h-42zm-50 0h42v-38h-42zm-49 0h42v-38h-42zm-49 0h41v-38h-41zm-50 0h42v-38H98zm50-46h41v-38h-41zm49 0h42v-38h-42zm49 0h42v-38h-42zm0-46h42v-38h-42zm226 75s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39z"
		/>
	</svg>
);
export default SvgDockerIcon;
