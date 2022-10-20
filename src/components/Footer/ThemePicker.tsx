import { capitaliseFirstLetter } from "@/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import If from "../If";


const selectName = "site-wide-theme-picker";
const selectClassName = "bg-background border-foreground dark:border-foreground-dark dark:bg-background-dark p-1 rounded border";

const ThemePicker = () => {
	const { theme, setTheme, systemTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	return <form className="flex">
		<div className="mr-2 flex items-center" title="Pick website theme">
			🎨
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
			<select
				name={selectName}
				value={theme}
				onChange={e => setTheme(e.target.value)}
				className={selectClassName}
			>
				<option value="system">🖥 System Default ({mounted && capitaliseFirstLetter(systemTheme as string)})</option>
				<option value="dark">🌘 Dark</option>
				<option value="light">☀️ Light</option>
			</select>
		</If>
	</form>;
};

export default ThemePicker;