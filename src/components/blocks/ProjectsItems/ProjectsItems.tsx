import { ProjectsItemsItem } from '../../../@types/components/blocks/Projects/types'

import { useData } from '../../../requests/useData'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import ProjectsItem from '../../shared/ProjectsItem/ProjectsItem'

const ProjectsItems = () => {
	const { data, isSuccess } = useData(['projects'], 'projects')
	if (!isSuccess) return null

	return (
		<div className='projects__items'>
			<div className='block-container'>
				<div className='projects__items_box'>
					<ContentHeaderTitle title='complete-apps' />
					<div className='projects__items-completed'>
						{data.projectsItems.map((item: ProjectsItemsItem) => {
							return (
								<ProjectsItem
									key={item.id}
									id={item.id}
									stackItems={item.stackItems}
									projectTitle={item.projectTitle}
									projectText={item.projectText}
									projectButtons={item.projectButtons}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProjectsItems
