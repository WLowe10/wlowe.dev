import { ReactNode } from "react"
import { FullFlex } from "@global/components/containers";
import { TopBar } from "@global/components/general";
import { Footer } from "@global/components/general";
import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Providers } from "@root/providers";

type Props = {
    children: ReactNode
};

const useGlobalStyles = createUseStyles({
  "@global": {
    "body": {
      overflow: "overlay",
      fontSize: "100%",
      backgroundColor: Theme.background
    },
    "button": {
      background: "none",
      color: "inherit",
      border: "none",
      padding: 0,
      font: "inherit",
      cursor: "pointer",
      outline: "inherit"
    },
  }
}, { link: true })


export const PageLayout = ({ children }: Props) => {
    useGlobalStyles();

    return (
      <Providers>
        <FullFlex style={{justifyContent: "center"}}>
            <div style={{maxWidth: "56rem", display: "flex", flexDirection: "column", padding: "2rem", flex: 1, justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <TopBar />
                    {
                        children
                    }
                </div>
                <Footer />
            </div>
        </FullFlex>
      </Providers>
    )
}