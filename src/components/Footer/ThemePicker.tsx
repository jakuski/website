import { capitaliseFirstLetter } from "@/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ChevronIcon from "../icons/Chevron";
import ThemeIcon from "../icons/Theme";
import If from "../If";

const selectName = "site-wide-theme-picker";
const selectClassName =
	"py-1 pl-2 pr-8 rounded bg-ui-300 dark:bg-ui-700 text-ui-900 dark:text-ui-200 shadow reset-appearance";

const ThemePicker = () => {
	const { theme, setTheme, systemTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<form className="flex print:hidden">
			<div className="mr-3 flex items-center" title="Pick website theme">
				<ThemeIcon />
				<label htmlFor={selectName} className="sr-only">
					Theme
				</label>
			</div>

			<If condition={!mounted}>
				<select className={selectClassName} disabled>
					<option>Loading themes...</option>
				</select>
			</If>

			<If condition={mounted}>
				<div className="relative">
					<select
						name={selectName}
						value={theme}
						onChange={e => setTheme(e.target.value)}
						className={selectClassName}
					>
						<option value="system">
							Device Default (
							{mounted && capitaliseFirstLetter(systemTheme as string)})
						</option>
						<option value="dark">Dark</option>
						<option value="light">Light</option>
					</select>
					<div className="absolute right-2 top-0 bottom-0 flex items-center pointer-events-none">
						<ChevronIcon />
					</div>
				</div>
			</If>
		</form>
	);
};

export default ThemePicker;
