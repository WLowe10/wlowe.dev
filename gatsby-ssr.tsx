import React from "react";
import { PageLayout } from "./src/global/components/layouts";
import { Providers } from "./src/root/providers";

export const wrapRootElement = ({ element, props }) => {
    return (
        <Providers>
            {
                element
            }
        </Providers>
    )
}

export const wrapPageElement = ({ element, props }) => {
    return (
        <PageLayout {...props}>
            {
                element
            }
        </PageLayout>
    )
}