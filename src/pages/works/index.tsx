import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import images, { Image as ImageType } from "@/modules/images";
import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import projectIndexPageSort from "@/content/projects/_indexPageSort.json";
import { getStaticMarkdoc } from "@/modules/markdown/server";

interface ProjectLinkProps {
	title: string;
	description: string;
	category: string;
	image: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = props => {
	return <Link href="www.example.com">
		<a className="shadow-md rounded-md mt-4 relative block hover:scale-[1.025] transition-all hover:shadow-lg transform-gpu" >
			<Image
				src={images[props.image].src}
				alt={images[props.image].alt}
				placeholder="blur"
				className="rounded-md shadow-inner"
				layout="responsive"
			/>
			<div className="absolute bottom-0 h-1/3 w-full rounded-md bg-gradient-to-t from-black opacity-40" />
			<div className="absolute bottom-0 left-0 text-white drop-shadow-md h-full flex justify-between flex-col p-4">
				<span className="uppercase tracking-widest text-xs mb-1">{props.category}</span>
				<div>
					<h2 className="font-serif text-2xl md:text-4xl">{props.title}</h2>
					<p className="tracking-wider text-sm">{props.description}</p>
				</div>
			</div>
		</a>
	</Link>;
};

interface ProjectPageProps {

}

const ProjectsIndexPage: React.FC<{}> = props => {
	return <Post title="Works.">
		<p>Here are some of my selected works.</p>
		
	</Post>;
};

export default ProjectsIndexPage;

export const getStaticProps = async () => {
	const availableProjectIDs = await getContentIDs(ContentDirectoryNames.PROJECTS);

	const computedProjects = [];

	for (const id of projectIndexPageSort.sort) {
		// Check if the ID in the sort array is present within the project directory
		if (!availableProjectIDs.includes(id)) {
			throw Error(`Project index page sort array specifies project id '${id}' however it is not present within projects content directory. Check for typos.`);
		}

		const markdoc = await getStaticMarkdoc([ContentDirectoryNames.PROJECTS, `${id}.md`])({});
		
	}

	return {
		props: {
			projects: availableProjectIDs
		},
	};
};