import { MobileMenu } from "../components";
import { useState } from "react";
import { MobileContext } from "../context";
import type { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

export const MobileProvider = ({ children }: { children: ReactNode }) => {
	const [navOpen, setNavOpen] = useState(false);

	const handleOpen = () => {
		setNavOpen(true);
	};

	const handleClose = () => {
		setNavOpen(false);
	};

	return (
		<MobileContext.Provider
			value={{
				open: handleOpen,
				close: handleClose,
			}}
		>
			<AnimatePresence>{navOpen && <MobileMenu />}</AnimatePresence>
			{children}
		</MobileContext.Provider>
	);
};
