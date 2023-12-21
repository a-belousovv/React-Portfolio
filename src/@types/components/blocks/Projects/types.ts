export interface ProjectsItemsItem {
	id: string
	stackItems: StackItemsItem[]
	projectTitle: string
	projectText: string
	projectButtons: projectButtonsButton[]
}

export interface StackItemsItem {
	id: string
	title: string
}
export interface projectButtonsButton {
	id: string
	title: string
	span: string
}
