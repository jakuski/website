"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
