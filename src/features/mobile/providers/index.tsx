import { MobileMenu } from "../components";
import { useState } from "react";
import { MobileContext } from "../context";
import { AnimatePresence } from "framer-motion";
import type { PropsWithChildren } from "react";

export const MobileProvider = ({ children }: PropsWithChildren) => {
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
