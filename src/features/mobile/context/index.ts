import { createContext } from "react";

export type MobileContextType = {
	open: () => void;
	close: () => void;
};

export const MobileContext = createContext<MobileContextType | null>(null);
