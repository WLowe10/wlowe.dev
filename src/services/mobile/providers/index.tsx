import { MobileMenu } from "../components";
import { useState } from "react";
import { MobileContext } from "../context";
import type { ReactNode } from "react";

export const MobileProvider = ({ children }: { children: ReactNode }) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleOpen = () => {
        setNavOpen(true);
    };

    const handleClose = () => {
        setNavOpen(false);
    };
    
    return (
        <MobileContext.Provider value={{
            open: handleOpen, 
            close: handleClose
        }}>
        {
            navOpen && <MobileMenu />
        }
        {
            children
        }
        </MobileContext.Provider>
    )
};