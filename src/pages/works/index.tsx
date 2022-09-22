import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import images, { Image as ImageType } from "@/modules/images";

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

const WorksPage: React.FC<{}> = props => {
	return <Post title="Works.">
		<p>Here are some of my selected works.</p>
		<ProjectLink
			title="Example Project"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."
			category="Graphic Design"
			image="p/cookbook/cookbook_cover"
		/>
		<ProjectLink
			title="Example Project"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl."

			category="Graphic Design"
			image="p/cookbook/cookbook_cover"
		/>
	</Post>;
};

export default WorksPage;

export const getStaticProps = () => {
	return {
		props: {
			projects: []
		},
	};
};