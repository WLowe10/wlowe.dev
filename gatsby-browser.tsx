import React from "react";
import { Root } from "./src/root";
import { PageLayout } from "./src/components/layouts";

import "reset-css";
import "@global/assets/fonts/saiyan-sans/font.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/satisfy/400.css";

export const wrapRootElement = ({ element, props }) => {
    return (
        <Root>
            {
                element
            }
        </Root>
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