import { Link } from 'react-router-dom'
import {
	ProjectStackItem,
	ProjectsItemProps,
} from '../../../@types/Projects/ProjectsTypes'

const ProjectsItem: React.FC<ProjectsItemProps> = ({
	projectName,
	projectSrc,
	projectAboutText,
	projectHref,
	projectStackItems,
}) => {
	return (
		<div className='projects__items_item'>
			<div className='projects__item_img'>
				<img src={projectSrc} alt='' />
			</div>
			<div className='projects__item_stack'>
				{projectStackItems.map((item: ProjectStackItem) => {
					return (
						<h4 className='projects__stack_item' key={item.id}>
							{item.title}
						</h4>
					)
				})}
			</div>
			<div className='projects__item_content'>
				<h3 className='projects__content_title'>{projectName}</h3>
				<h4 className='projects__content_text'>{projectAboutText}</h4>
				<div className='projects__content_buttons'>
					<Link
						target='_blank'
						to={projectHref}
						className='projects__buttons_item'>
						<h4 className='projects__item_title'>Live</h4>
						<span>&lt;~&gt;</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProjectsItem
