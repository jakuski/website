"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

import { LOCALSTORAGE_THEME_KEY } from "@/constants";

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" storageKey={LOCALSTORAGE_THEME_KEY}>
			{children}
		</ThemeProvider>
	);
};

export default AppProviders;
