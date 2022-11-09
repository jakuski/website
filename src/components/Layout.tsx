import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

const StandardLayout: React.FC<React.PropsWithChildren> = props => {
	console.log(props);
	return (
		<>
			<Navbar />
			<div className="flex h-full flex-col">
				<main id="main-content">
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