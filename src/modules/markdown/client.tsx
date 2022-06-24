import { renderMarkdoc } from ".";
import { MarkdocLoaderProps } from "./server";

const MarkdocRenderer: React.FC<MarkdocLoaderProps> = props => {
	return <>{renderMarkdoc(props.markdocContent)}</>;
};

export default MarkdocRenderer;