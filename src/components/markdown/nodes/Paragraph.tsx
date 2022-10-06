import React from "react";

const Paragraph: React.FC<React.PropsWithChildren> = props => {
	return <div className="mb-4" role="paragraph">
		{props.children}
	</div>;
};

export default Paragraph;