import { useRef } from 'react'
import { ProjectsItemsItem } from '../../../@types/components/blocks/Projects/types'
import { useData } from '../../../requests/useData'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import ProjectsItem from '../../shared/ProjectsItem/ProjectsItem'
import { useIntersectionObserverHook } from '../../../services/hooks/useEffectObserver'

const Projects = () => {
	const { data, isSuccess } = useData(['projects'], 'projects')
	const projectsBox = useRef<HTMLDivElement>(null)
	const inViewRef = useIntersectionObserverHook(projectsBox, 'animation', 0.5)
	if (!isSuccess) return null
	return (
		<div className='projects' ref={inViewRef}>
			<div className='block-container'>
				<div ref={projectsBox} className='projects__box'>
					<div className='projects__header'>
						<div className='projects__left'>
							<ContentHeaderTitle title='projects' />
							<div className='projects__header_line'></div>
						</div>
						<div className='projects__right'>
							<h3 className='projects__header_view-title'>
								{data.projectsButtonMore}
							</h3>
							<h3 className='projects__header_view-arrow'>~~&gt;</h3>
						</div>
					</div>
					<div className='projects__items'>
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

export default Projects
