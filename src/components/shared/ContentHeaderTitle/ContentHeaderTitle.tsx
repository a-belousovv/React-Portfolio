import { ContentHeaderTitleInterface } from '../../../@types/components/shared/ContentHeaderTitleInterface/types'

const ContentHeaderTitle: React.FC<ContentHeaderTitleInterface> = ({
	title,
}) => {
	return (
		<h3 className='content__header_title'>
			<span>&lt;</span>
			{title}
			<span>&gt;</span>
		</h3>
	)
}

export default ContentHeaderTitle
