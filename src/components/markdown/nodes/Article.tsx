import React from "react";

const Article: React.FC<React.PropsWithChildren> = props => {
	return <article className="md-wrapper">
		{props.children}
	</article>;
};

export default Article;