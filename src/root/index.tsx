import { Providers } from "./providers";
import type { PropsWithChildren } from "react";

export const Root = ({ children }: PropsWithChildren) => {
	return <Providers>{children}</Providers>;
};
