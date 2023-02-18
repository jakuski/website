import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import { resolveImage } from "@/modules/images";
import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import projectIndexPageSort from "@/content/projects/_indexPageSort.json";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import Metadata from "@/components/Meta";
import { useState } from "react";
import c from "clsx";

interface ProjectCategoryPillProps {
	name: string;
	count: number;
	active?: boolean;
	unselected?: boolean;
	onClick?: () => void;
}

const ProjectCategoryPill: React.FC<ProjectCategoryPillProps> = props => {
	const className = c(
		"border  dark:border-stone-700 rounded-full text-stone-800 dark:text-stone-300 flex px-4 py-2 items-center justify-center transition-all shrink-0 select-none disable-tap-highlight",
		{
			"opacity-50 hover:opacity-100": props.unselected,
			"border-stone-400": !props.active,
			"bg-stone-800 border-stone-800 dark:bg-stone-700 text-stone-50 dark:text-stone-50":
				props.active
		}
	);

	return (
		<button onClick={props.onClick} className={className}>
			{props.name} &ndash; {props.count}
		</button>
	);
};

interface ProjectLinkProps {
	title: string;
	description: string;
	category: string[];
	image: string;
	href: string;
	year?: number;
	requestPriorityLoading?: boolean;
}

const ProjectLink: React.FC<ProjectLinkProps> = props => {
	const { src, alt } = resolveImage(props.image);

	return (
		<Link
			href={props.href}
			className="shadow-md rounded-md mt-4 relative block hover:scale-[1.025] transition-all hover:shadow-lg transform-gpu h-80 overflow-hidden select-none"
		>
			<Image
				src={src}
				alt={alt}
				placeholder="blur"
				className="rounded-md shadow-inner h-80 object-cover"
				fill
				quality={90}
				priority={props.requestPriorityLoading === true}
			/>
			{/* Bottom black gradient */}
			<div className="absolute bottom-0 h-2/5 w-full rounded-md bg-gradient-to-t from-black opacity-50" />
			{/* Top black gradient */}
			<div className="absolute top-0 h-1/5 w-full rounded-md bg-gradient-to-b from-black opacity-50" />
			{/* Text content */}
			<div className="absolute bottom-0 left-0 text-white drop-shadow-md h-full w-full flex justify-between flex-col p-4">
				<div className="uppercase tracking-widest text-xs mb-1 font-medium flex w-full justify-between items-start">
					<div className="leading-normal">
						{props.category.map((category, index) => (
							<div key={category} className="inline-block">
								{category}
								{index === props.category.length - 1 ? (
									""
								) : (
									<span>,&nbsp;</span>
								)}
							</div>
						))}
					</div>
					<span className="ml-5">{props.year}</span>
				</div>
				<div>
					<h2 className="font-serif text-xl md:text-2xl mb-1 font-bold">
						{props.title}
					</h2>
					<p className="font-medium text-sm">{props.description}</p>
				</div>
			</div>
		</Link>
	);
};

interface ProjectPageProps {
	projects: ProjectLinkProps[];
}

const countProjectCategories = (
	projects: ProjectLinkProps[]
): Record<string, number> => {
	const final: Record<string, number> = {};

	for (const project of projects) {
		for (const category of project.category) {
			if (final[category] == null) {
				final[category] = 1;
			} else {
				final[category]++;
			}
		}
	}

	return final;
};

const ProjectCountLabel: React.FC<{
	selectedCategory: string | null;
	categoryCounts: Record<string, number>;
	projects: ProjectLinkProps[];
}> = props => {
	const count =
		props.selectedCategory === null
			? props.projects.length
			: props.categoryCounts[props.selectedCategory];

	return (
		<p>
			Showing {count} project{count === 1 ? "" : "s"} out of{" "}
			{props.projects.length}.
		</p>
	);
};

const ProjectsIndexPage: React.FC<ProjectPageProps> = props => {
	const categoryCounts = countProjectCategories(props.projects);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	return (
		<Post title="Works.">
			<Metadata title="Works" description="Projects by Jakub Staniszewski" />
			<p className="mb-4">
				Here are some of my selected works. Press the buttons below if you would
				like to filter by category/discipline.
			</p>

			<div className="flex gap-2 flex-wrap mb-2">
				{Object.keys(categoryCounts).map(category => (
					<ProjectCategoryPill
						key={category}
						name={category}
						count={categoryCounts[category]}
						active={selectedCategory === category}
						unselected={
							selectedCategory !== null && selectedCategory !== category
						}
						onClick={() => {
							selectedCategory === category
								? setSelectedCategory(null)
								: setSelectedCategory(category);
						}}
					/>
				))}
			</div>

			<ProjectCountLabel
				selectedCategory={selectedCategory}
				projects={props.projects}
				categoryCounts={categoryCounts}
			/>

			{props.projects
				.filter(val => {
					// If no category is selected, return everything.
					if (selectedCategory === null) return true;
					// Else only return projects with a matching category to the selected one.
					else if (val.category.includes(selectedCategory)) return true;

					return false;
				})
				.map((project, index) => (
					<ProjectLink
						key={index}
						requestPriorityLoading={index === 0 || index === 1}
						{...project}
					/>
				))}
		</Post>
	);
};

export default ProjectsIndexPage;

export const getStaticProps = async (): Promise<{
	props: ProjectPageProps;
}> => {
	const availableProjectIDs = await getContentIDs(
		ContentDirectoryNames.PROJECTS
	);

	const computedProjects: ProjectLinkProps[] = [];

	for (const id of projectIndexPageSort.sort) {
		// Check if the ID in the sort array is present within the project directory
		if (!availableProjectIDs.includes(id)) {
			throw Error(
				`Project index page sort array specifies project id '${id}' however it is not present within projects content directory. Check for typos.`
			);
		}

		const { props: markdoc } = await getStaticMarkdoc(
			ContentDirectoryNames.PROJECTS,
			`${id}.md`
		)();

		let category: string | string[] | void =
			markdoc.frontmatter.project?.category;

		if (category != null) {
			// If the category is a string, convert it to an array.
			if (typeof category === "string") {
				category = [category];
			}
		} else {
			category = [];
		}

		const projectData: ProjectLinkProps = {
			title: markdoc.frontmatter.meta.title,
			description: markdoc.frontmatter.meta?.description || "",
			image: markdoc.frontmatter.meta?.image as string,
			category,
			year: markdoc.frontmatter.project?.date
				? new Date(markdoc.frontmatter.project?.date).getFullYear()
				: void 0,
			href: `/works/${id}`
		};

		computedProjects.push(projectData);
	}

	return {
		props: {
			projects: computedProjects
		}
	};
};
