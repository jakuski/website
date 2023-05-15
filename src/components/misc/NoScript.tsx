const NoScript: React.FC = () => (
	<noscript>
		<div
			style={{
				margin: "8px",
				padding: "16px",
				backgroundColor: "lightcoral",
				textAlign: "center",
				border: "1px solid red"
			}}
		>
			For full functionality of this site, it is necessary to enable JavaScript.
			Here are the{" "}
			<a href="https://www.enable-javascript.com/" style={{ color: "blue" }}>
				instructions on how to enable JavaScript in your web browser
			</a>
			.
		</div>
	</noscript>
);

export default NoScript;
