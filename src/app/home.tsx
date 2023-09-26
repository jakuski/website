"use client";
import Clock from "@/components/Clock";
import CitrineCanvas from "@/components/Shader/R3F";
import clsx from "clsx";
import useDebug3D from "@/hooks/useDebug3D";

const Home = () => {
	const debug3d = useDebug3D();
	return (
		<main className="min-h-screen font-sans text-ui-800 text-opacity-90 selection:bg-ui-950/20">
			<div className="min-h-screen bg-brand sticky top-0">
				<div className="absolute left-0 top-0 z-0 h-screen w-full">
					<CitrineCanvas />
				</div>
				<div
					className={clsx(
						"relative z-10 mx-64 flex min-h-screen flex-col justify-between pt-8 font-serif-cond text-[2vw] leading-[2.5vw]",
						debug3d && "pointer-events-none"
					)}
				>
					<div className="flex flex-col items-end">
						<div className="flex items-center text-right">
							<Star />
							<div className="w-[7vw]">
								<Clock />
							</div>
						</div>
						<span>London, United Kingdom.</span>
					</div>
					<div className="mb-6 flex items-baseline justify-between  font-serif-cond">
						<h1 className="indent-[1vw] text-[14vw] italic leading-[13vw] tracking-tight">
							Jakub
							<br />
							Staniszewski
						</h1>
						<div className="relative">
							<h2 className="absolute bottom-full right-0 w-[30vw] text-right text-[2vw] font-medium italic tracking-tight">
								Front-end Developer & Designer.
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="relative bg-brand-dark">
				<h1 className="text-6xl text-ui-100 my-8">About me</h1>
			</div>
		</main>
	);
};

export default Home;

const Star = () => (
	<svg
		width="46"
		height="29"
		viewBox="0 0 46 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="23.7667"
			y1="-2.79008e-08"
			x2="23.7667"
			y2="29"
			stroke="#312718"
			strokeWidth="1.53333"
		/>
		<line
			x1="46"
			y1="15.0334"
			y2="15.0334"
			stroke="#312718"
			strokeWidth="1.53333"
		/>
		<line
			x1="33.3533"
			y1="22.8211"
			x2="14.7068"
			y2="6.87771"
			stroke="#312718"
			strokeWidth="1.53333"
		/>
		<line
			x1="33.7417"
			y1="8.29521"
			x2="13.0839"
			y2="21.5293"
			stroke="#312718"
			strokeWidth="1.53333"
		/>
	</svg>
);
