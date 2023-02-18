import c from "clsx";

const SkipToMainButtonClassName = c(
	"pointer-events-none",
	"fixed left-0 top-4 z-50 py-4 px-6",
	"bg-stone-300 shadow-md",
	"-translate-x-full transition-transform duration-75",
	"focus:pointer-events-auto focus:translate-x-0"
);

const SkipToMainButton: React.FC = () => {
	return (
		<a href="#main-content" className={SkipToMainButtonClassName}>
			Skip to main content
		</a>
	);
};

export default SkipToMainButton;
