import React from "react";

const Paragraph: React.FC<React.PropsWithChildren> = props => {
	return <p className="mb-4">
		{props.children}
	</p>;
};

export default Paragraph;