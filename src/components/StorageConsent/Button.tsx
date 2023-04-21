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
			"bg-ui-600 text-ui-200 hover:bg-ui-500": props.primary === true,
			"bg-transparent text-ui-200 border border-ui-500 hover:bg-ui-500/20":
				props.secondary === true
		},
		props.className
	);

	return <button className={className}>{props.children}</button>;
};

export default Button;
