import { PropsWithChildren } from "react";
import c from "clsx";

const Button: React.FC<
	PropsWithChildren<{
		primary?: boolean;
		secondary?: boolean;
		className?: string;
	}>
> = props => {
	// grow?
	const className = c(
		"whitespace-nowrap transition-colors duration-50 rounded px-4 py-2 font-bold shadow-sm",
		{
			"bg-stone-600 text-stone-200 hover:bg-stone-500": props.primary === true,
			"bg-transparent text-stone-200 border border-stone-500 hover:bg-stone-500/20":
				props.secondary === true
		},
		props.className
	);

	return <button className={className}>{props.children}</button>;
};

export default Button;
