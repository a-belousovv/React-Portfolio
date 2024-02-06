interface ContentHeaderTitleProps {
	text: string
}
const ContentHeaderTitle: React.FC<ContentHeaderTitleProps> = ({ text }) => {
	return (
		<h3 className='content__header_title'>
			<span>&lt;</span>
			{text}
			<span>&gt;</span>
		</h3>
	)
}

export default ContentHeaderTitle
