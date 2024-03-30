import { MobileProvider } from "@features/mobile/providers";
import type { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
	return <MobileProvider>{children}</MobileProvider>;
};
