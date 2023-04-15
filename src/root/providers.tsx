import { MobileProvider } from "@services/mobile/providers";
import type { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <MobileProvider>
            {
                children
            }
        </MobileProvider>
    )
}