import { Providers } from "./providers"
import type { ReactNode } from "react"

export const Root = ({ children }: { children: ReactNode }) => {
    return (
        <Providers>
            {
                children
            }
        </Providers>
    )
}