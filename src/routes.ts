export class Route {
	href: string;
	displayName: string;
	parent?: Route;
	constructor (href: string, displayName: string) {
		this.href = href;
		this.displayName = displayName;
	};
	extend (appendHref: string, displayName: string): Route {
		const route = new Route(this.href + appendHref, displayName);
		route.parent = this;
		return route;
	}
}

export const Home = new Route("/", "Home");
export const About = Home.extend("about", "About");
export const WorksHome = Home.extend("works", "Works");
export const Contact = Home.extend("contact", "Contact");
export const Blog = Home.extend("blog", "Blog");

export const Redirect = Home.extend("go", "Redirect Service");
export const Instagram = Redirect.extend("/instagram", "Instagram");
export const Twitter = Redirect.extend("/twitter", "Twitter");
export const LinkedIn = Redirect.extend("/linkedin", "LinkedIn");
export const Vimeo = Redirect.extend("/vimeo", "Vimeo");

export const navbar = [WorksHome, Blog, About, Contact];
