import { useContext } from "react";
import { MobileContext } from "../context";
import type { MobileContextType } from "../context";

export const useMobile = () => {
	return useContext(MobileContext) as MobileContextType;
};
