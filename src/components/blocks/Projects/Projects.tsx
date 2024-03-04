import { Link } from 'react-router-dom'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import ProjectsItem from '../../shared/ProjectsItem/ProjectsItem'
import { ProjectItem } from '../../../@types/Projects/ProjectsTypes'

const Projects = () => {
	const projectsArray = [
		{
			id: 'CatsByProject',
			projectName: 'CatsBY',
			projectSrc: '/images/projects/cats-by-header-bg-for-portfolio.jpg',
			projectAboutText: 'Онлайн магазин по продаже когтеточек',
			projectsHref: 'https://cats-by.onrender.com/',
			projectStackItems: [
				{ id: 'SCSS_id', title: 'SCSS,' },
				{ id: 'React_id', title: 'React,' },
				{ id: 'Redux_id', title: 'Redux ToolKit,' },
				{ id: 'TanstackQuery_id', title: 'Tanstack Query,' },
				{ id: 'TypeScript_id', title: 'TypeScript' },
			],
		},
	]
	return (
		<div className='projects'>
			<div className='block-container'>
				<div className='projects__box'>
					<div className='projects__header'>
						<div className='projects__left'>
							<ContentHeaderTitle text='projects' />
							<div className='projects__header_line'></div>
						</div>
						<Link to='/projects' className='projects__right'>
							<h3 className='projects__header_view-title'>View all</h3>
							<h3 className='projects__header_view-arrow'>~~&gt;</h3>
						</Link>
					</div>
					<div className='projects__items'>
						{projectsArray.map((item: ProjectItem) => {
							return (
								<ProjectsItem
									key={item.id}
									projectAboutText={item.projectAboutText}
									projectName={item.projectName}
									projectHref={item.projectsHref}
									projectSrc={item.projectSrc}
									projectStackItems={item.projectStackItems}
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
