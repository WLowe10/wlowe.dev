import React from "react";
import { PageLayout } from "./src/components/layouts";
import { Root } from "./src/root";

// export const wrapRootElement = ({ element, props }) => {
//     return (
//         <Root>
//             {
//                 element
//             }
//         </Root>
//     )
// }

export const wrapPageElement = ({ element, props }) => {
    return (
        <PageLayout {...props}>
            {
                element
            }
        </PageLayout>
    )
}