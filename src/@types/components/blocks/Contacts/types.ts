export interface ContactsMessageInterface {
	title: string
	linksItems: ContactsMessageLinksItem[]
}

export interface ContactsMessageLinksItem {
	id: string
	title: string
	href: string
}
