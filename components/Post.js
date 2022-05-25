import Head from "next/head";

export default function Post(props) {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div className="max-w-md m-auto">
				<div className="mx-4 pt-64 o">
					{props.title && <h1 className="font-serif text-5xl font-bold tracking-tight mb-4">
						{props.title}
					</h1>}
					{props.children}
				</div>
			
			</div>
		</>
	);
}