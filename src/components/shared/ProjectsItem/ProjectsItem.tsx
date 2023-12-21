import { ProjectsItemsItem } from '../../../@types/components/blocks/Projects/types'

const ProjectsItem: React.FC<ProjectsItemsItem> = ({
	stackItems,
	projectTitle,
	projectText,
	projectButtons,
}) => {
	return (
		<div className='projects__items_item'>
			<div className='projects__item_img'>
				<img src='/images/projects/projects-item-1.jpg' alt='' />
			</div>
			<div className='projects__item_stack'>
				{stackItems.map((item) => {
					return (
						<h4 className='projects__stack_item' key={item.id}>
							{item.title}
						</h4>
					)
				})}
			</div>
			<div className='projects__item_content'>
				<h3 className='projects__content_title'>{projectTitle}</h3>
				<h4 className='projects__content_text'>{projectText}</h4>
				<div className='projects__content_buttons'>
					{projectButtons.map((item) => {
						return (
							<div className='projects__buttons_item' key={item.id}>
								<h4 className='projects__item_title'>{item.title}</h4>
								<span>{item.span}</span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default ProjectsItem
