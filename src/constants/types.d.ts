interface NavLink {
	id: string;
	title: string;
}

export interface Feature {
	id: string;
	icon: string;
	title: string;
	content: string;
}

export interface Feedback {
	id: string;
	content: string;
	name: string;
	title: string;
	img: string;
}

export interface Stat {
	id: string;
	title: string;
	value: string;
}

export interface FooterLink {
	title: string;
	links: TitledLink[];
}

export interface TitledLink {
	name: string;
	link: string;
}

export interface SocialMedia {
	id: string;
	icon: string;
	link: string;
}

export interface Client {
	id: string;
	logo: string;
}
