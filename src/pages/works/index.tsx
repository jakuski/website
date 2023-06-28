import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import c from "clsx";

import Metadata from "@/components/Meta";
import Post from "@/components/Post";
import { MARKDOC_FILE_EXTENSION } from "@/constants";
import projectIndexPageSort from "@/content/projects/_indexPageSort.json";
import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import { resolveImage } from "@/modules/images";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import { isDev } from "@/utils";

interface ProjectCategoryPillProps {
	name: string;
	count: number;
	active?: boolean;
	unselected?: boolean;
	onClick?: () => void;
}

interface ComingSoonProject {
	title: string;
	description: string;
	image: string;
	category: string[];
}

const ProjectCategoryPill: React.FC<ProjectCategoryPillProps> = props => {
	const className = c(
		"border dark:border-ui-700 rounded-full flex px-4 py-2 items-center justify-center transition-all shrink-0 select-none disable-tap-highlight",
		{
			"opacity-50 hover:opacity-100 text-ui-800 dark:text-ui-300":
				props.unselected,
			"border-ui-400": !props.active,
			"bg-ui-800 border-ui-800 text-ui-100 dark:bg-ui-700 text-ui-50 dark:text-ui-50":
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
	href?: string;
	year?: number;
	comingSoon?: boolean;
	requestPriorityLoading?: boolean;
}

const ProjectLink: React.FC<ProjectLinkProps> = props => {
	const { comingSoon } = props;
	const { src, alt } = resolveImage(props.image);

	const LinkComponent = comingSoon ? "div" : Link;

	return (
		<LinkComponent
			href={props.href || ""}
			className={c(
				"shadow-md rounded-md mt-4 relative block overflow-hidden select-none transition-all",
				{
					["h-52 grayscale cursor-not-allowed"]: comingSoon,
					["h-80 hover:scale-[1.025] hover:shadow-lg transform-gpu"]:
						!comingSoon
				}
			)}
		>
			<Image
				src={src}
				alt={alt}
				placeholder="blur"
				className="h-80 rounded-md object-cover shadow-inner"
				fill
				quality={90}
				priority={props.requestPriorityLoading === true}
			/>
			{/* Bottom black gradient */}
			<div className="absolute bottom-0 h-2/5 w-full rounded-md bg-gradient-to-t from-black opacity-50" />
			{/* Top black gradient */}
			<div className="absolute top-0 h-1/5 w-full rounded-md bg-gradient-to-b from-black opacity-50" />
			{/* Text content */}
			<div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-between p-4 text-white drop-shadow-md">
				<div className="mb-1 flex w-full items-start justify-between text-xs font-medium uppercase tracking-widest">
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
					<span className="ml-5">
						{comingSoon ? "Coming soon" : props.year}
					</span>
				</div>
				<div>
					<h2 className="mb-1 font-serif text-xl font-bold md:text-2xl">
						{props.title}
					</h2>
					<p className="text-sm font-medium">{props.description}</p>
				</div>
			</div>
		</LinkComponent>
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

const FILTER_CATEGORY_QUERY_NAME = "filter";

const ProjectsIndexPage: React.FC<ProjectPageProps> = props => {
	const categoryCounts = countProjectCategories(props.projects);
	const [selectedCategory, _setSelectedCategory] = useState<string | null>(
		null
	);
	const { isReady, query, push, asPath } = useRouter();

	// This is to prevent the query params from being applied multiple times
	const appliedQueryParamsForCache = useRef<string>();

	useEffect(() => {
		if (!isReady) return;
		if (appliedQueryParamsForCache.current === asPath) return;
		appliedQueryParamsForCache.current = asPath;

		if (!query[FILTER_CATEGORY_QUERY_NAME]) {
			return _setSelectedCategory(null);
		}

		const rawCategoryQuery = query[FILTER_CATEGORY_QUERY_NAME];

		// This handles cases where there are multiple query params with the same name such as /test?filter=foo&filter=bar
		// This will only use the first one, if there are multiple.
		const categoryQuery = Array.isArray(rawCategoryQuery)
			? rawCategoryQuery[0]
			: rawCategoryQuery;

		if (isDev) {
			console.log(query, asPath);
		}

		// If the category doesn't exist, don't apply it
		if (!categoryCounts[categoryQuery]) return;

		_setSelectedCategory(categoryQuery);
	}, [isReady, query, categoryCounts, asPath]);

	const setSelectedCategory = useCallback(
		(category: string | null) => {
			let query;

			if (typeof category === "string") {
				query = {
					[FILTER_CATEGORY_QUERY_NAME]: category
				};
			}

			push({ query }, undefined, {
				shallow: true
			});

			_setSelectedCategory(category);
		},
		[push]
	);

	const title =
		selectedCategory === null ? "Works" : `${selectedCategory} Works`;

	return (
		<Post title="Works.">
			<Metadata title={title} description="Projects by Jakub Staniszewski" />
			<p className="mb-4">
				Here are some of my selected works. Press the buttons below if you would
				like to filter by category/discipline.
			</p>

			<div className="mb-2 flex flex-wrap gap-2">
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
			id + MARKDOC_FILE_EXTENSION
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

	const comingSoonProjects =
		projectIndexPageSort.comingSoon as ComingSoonProject[];
	for (const project of comingSoonProjects) {
		computedProjects.unshift({
			title: project.title,
			description: project.description,
			image: project.image,
			category: project.category,
			comingSoon: true
		});
	}

	return {
		props: {
			projects: computedProjects
		}
	};
};
