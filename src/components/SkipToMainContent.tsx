const SkipToMainButton: React.FC = () => {
	return <a href="#main-content" className="fixed left-0 top-4 bg-stone-300 pointer-events-none shadow-md z-20 py-4 px-6 -translate-x-full transition-transform duration-75 focus:pointer-events-auto focus:translate-x-0">
		Skip to main content
	</a>;
};

export default SkipToMainButton;