import { SVGProps } from "react";
const SvgZodIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1067 1067"
		{...props}
	>
		<path
			d="m249.76 199.57-183.7 183.7L513.1 924.94 1000 383.28l-183.7-183.7H249.76Z"
			fill="#142641"
		/>
		<path
			d="m175.58 477.37-70.2-83.64 292.23-170.26h217.56l-439.6 253.9Zm540.15-142.88L267.68 594.36l146.86 188.68H632.1l116.5-133.92H594.75v16.43h-209.6l551.61-319.61-105.54-97.58-122.96 71.7 7.46 14.43Z"
			fill="#274D82"
		/>
		<g filter="url(#a)">
			<path
				d="m249.76 199.57-183.7 183.7L513.1 924.94 1000 383.28l-183.7-183.7H249.76Z"
				stroke="#3068B7"
				strokeWidth={50}
				shapeRendering="crispEdges"
			/>
		</g>
		<g filter="url(#b)">
			<path
				d="M260.21 222.47 99.91 383.15 513.1 888.1l452.04-504.94-162.3-160.67H260.22Z"
				fill="#D9D9D9"
				fillOpacity={0.01}
			/>
		</g>
		<defs>
			<filter
				id="a"
				x={28.31}
				y={174.57}
				width={1016.13}
				height={815.65}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx={3} dy={20} />
				<feGaussianBlur stdDeviation={3.5} />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
				<feBlend
					in2="BackgroundImageFix"
					result="effect1_dropShadow_309_94"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_309_94"
					result="shape"
				/>
			</filter>
			<filter
				id="b"
				x={99.91}
				y={207.47}
				width={865.25}
				height={695.61}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feBlend
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy={20} />
				<feGaussianBlur stdDeviation={7.5} />
				<feComposite
					in2="hardAlpha"
					operator="arithmetic"
					k2={-1}
					k3={1}
				/>
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
				<feBlend in2="shape" result="effect1_innerShadow_309_94" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy={-20} />
				<feGaussianBlur stdDeviation={7.5} />
				<feComposite
					in2="hardAlpha"
					operator="arithmetic"
					k2={-1}
					k3={1}
				/>
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
				<feBlend
					in2="effect1_innerShadow_309_94"
					result="effect2_innerShadow_309_94"
				/>
			</filter>
		</defs>
	</svg>
);
export default SvgZodIcon;
