import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
	return (
		<>
			<Navbar/>
			<div className="flex h-full flex-col">
				<main>
					{children}
				</main>
				<div className="h-full w-full">
				</div>
				<Footer/>
			</div>
		</>
	);
}