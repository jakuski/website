import Post from "../components/Post";

const ServerErrorPage: React.FC = () => {
	return (
		<Post title="Error 500">
			<div className="italic">~crickets~</div>
			<div className="mb-4">
				Something has gone wrong on our end. Please try again later.
			</div>
			Apologies for the inconvenience.
		</Post>
	);
};

export default ServerErrorPage;
