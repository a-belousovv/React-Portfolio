export interface ProjectItem {
	id: string
	projectName: string
	projectSrc: string
	projectAboutText: string
	projectsHref: string
	projectStackItems: ProjectStackItem[]
}
export interface ProjectStackItem {
	id: string
	title: string
}

export interface ProjectsItemProps {
	projectName: string
	projectHref: string
	projectAboutText: string
	projectSrc: string
	projectStackItems: ProjectStackItem[]
}
