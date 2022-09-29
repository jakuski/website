import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import images from "@/modules/images";
import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import projectIndexPageSort from "@/content/projects/_indexPageSort.json";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import Metadata from "@/components/Meta";
import { useState } from "react";

interface ProjectCategoryPillProps {
	name: string;
	count: number;
	active?: boolean;
	unselected?: boolean;
	onClick?: () => void;
}

const ProjectCategoryPill: React.FC<ProjectCategoryPillProps> = props => {
	let className = "border border-black rounded-full flex px-4 py-2 items-center justify-center hover:bg-black hover:text-brand transition-all shrink-0";
	
	if (props.unselected) {
		className += " opacity-50 hover:opacity-100";
	}

	if (props.active) {
		className += " bg-black text-brand";
	}
	
	return <button
		onClick={props.onClick}
		className={className}
	>
		<div>
			{props.name} &mdash; {props.count}
		</div>
		
	</button>;
};

interface ProjectLinkProps {
	title: string;
	description: string;
	category: string;
	image: string;
	href: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = props => {
	return <Link href={props.href}>
		<a className="shadow-md rounded-md mt-4 relative block hover:scale-[1.025] transition-all hover:shadow-lg transform-gpu h-80 overflow-hidden" >
			<Image
				src={images[props.image].src}
				alt={images[props.image].alt}
				placeholder="blur"
				className="rounded-md shadow-inner h-80"
				layout="fill"
				objectFit="cover"
				quality={90}
			/>
			<div className="absolute bottom-0 h-2/5 w-full rounded-md bg-gradient-to-t from-black opacity-50" />
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
	projects: ProjectLinkProps[];
}

const mapProjectsToCategories = (projects: ProjectLinkProps[]): Record<string, number> => {
	const final: Record<string, number> = {};

	for (const project of projects) {
		final[project.category] ? final[project.category]++ : final[project.category] = 1;
	}

	return final;
};

const ProjectsIndexPage: React.FC<ProjectPageProps> = props => {
	const categoryCounts = mapProjectsToCategories(props.projects);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	return <Post title="Works.">
		<Metadata
			title="Works."
			description="Projects by Jakub Staniszewski"
		/>
		<p className="mb-2">Here are some of my selected works. Press the buttons below if you would like to filter by category/discipline.</p>
		<div className="flex gap-2 flex-wrap">
			{Object.keys(categoryCounts).map(category => (
				<ProjectCategoryPill
					key={category}
					name={category}
					count={categoryCounts[category]}
					active={selectedCategory === category}
					unselected={(selectedCategory !== null) && (selectedCategory !== category)}
					onClick={() => {
						selectedCategory === category ? setSelectedCategory(null) : setSelectedCategory(category);
					}}
				/>
			))}
		</div>
		{props.projects.filter(val => {
			if (selectedCategory === null) return true;
			else if (selectedCategory === val.category) return true;
		}).map((project, index) => (
			<ProjectLink key={index} {...project} />
		))}
	</Post>;
};

export default ProjectsIndexPage;

export const getStaticProps = async (): Promise<{ props: ProjectPageProps }> => {
	const availableProjectIDs = await getContentIDs(ContentDirectoryNames.PROJECTS);

	const computedProjects: ProjectLinkProps[] = [];

	for (const id of projectIndexPageSort.sort) {
		// Check if the ID in the sort array is present within the project directory
		if (!availableProjectIDs.includes(id)) {
			throw Error(`Project index page sort array specifies project id '${id}' however it is not present within projects content directory. Check for typos.`);
		}

		const { props: markdoc } = await getStaticMarkdoc([ContentDirectoryNames.PROJECTS, `${id}.md`])();

		console.log(markdoc);

		const projectData: ProjectLinkProps = {
			title: markdoc.frontmatter.meta.title,
			description: markdoc.frontmatter.meta?.description || "",
			image: markdoc.frontmatter.meta?.image as string,
			category: markdoc.frontmatter.project?.category || "",
			href: `/works/${id}`
		};
		
		computedProjects.push(projectData);
	}

	return {
		props: {
			projects: computedProjects
		},
	};
};