import { FullFlex } from "@components/containers";
import { TopBar } from "@components/general";
import { Footer } from "@components/general";
import { useGlobalStyles } from "@global/styles";
import type { PropsWithChildren } from "react";

export const PageLayout = ({ children }: PropsWithChildren) => {
	useGlobalStyles();

	return (
		<FullFlex style={{ justifyContent: "center" }}>
			<div
				style={{
					maxWidth: "56rem",
					display: "flex",
					flexDirection: "column",
					padding: "2rem",
					flex: 1,
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<TopBar />
					{children}
				</div>
				<Footer />
			</div>
		</FullFlex>
	);
};
