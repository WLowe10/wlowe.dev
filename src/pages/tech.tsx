import { PageLayout } from "@components/layouts";
import { Tech } from "@components/pages/tech";
import { SEO } from "@seo/index";
import { MobileProvider } from "@services/mobile/providers";

export const Head = () => {
    return (
        <SEO 
            title={"Tech"}
        />
    )
};

export default () => {
    return (
        <MobileProvider>
        <PageLayout>
            <Tech />
        </PageLayout>
        </MobileProvider>
    )
};