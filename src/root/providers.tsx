import { useGlobalStyles } from "@global/styles";
import { MobileProvider } from "@services/mobile/providers";
import type { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
    useGlobalStyles();

    return (
        <MobileProvider>
            {
                children
            }
        </MobileProvider>
    )
}