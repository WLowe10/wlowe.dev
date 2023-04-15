import { FullFlex } from "@global/components/containers";
import { TopBar } from "@global/components/general";
import { Footer } from "@global/components/general";
import { useGlobalStyles } from "@global/styles";
import type { ReactNode } from "react"

type Props = {
    children: ReactNode
};

export const PageLayout = ({ children }: Props) => {
  useGlobalStyles() //!fix global styles. should not be done in here

  return (
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
  )
}