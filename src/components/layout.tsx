import Footer from "./Footer";
import Navbar from "./navbar";
import React from "react";

const StandardLayout: React.FC<React.PropsWithChildren> = props => {
	return (
		<>
			<Navbar />
			<div className="flex h-full flex-col">
				<main>
					{props.children}
				</main>

				{/* Space element for footer */}
				<div className="h-full w-full" />
				<Footer />
			</div>
		</>
	);
};

export default StandardLayout;