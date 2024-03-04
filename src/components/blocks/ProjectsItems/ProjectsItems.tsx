import ProjectsItem from '../../shared/ProjectsItem/ProjectsItem'
const ProjectsItems = () => {
	const projectsArray = [
		{
			id: 'CatsByProject',
			projectName: 'CatsBY',
			projectSrc: '/images/projects/cats-by-header-bg-for-portfolio.jpg',
			projectAboutText: '',
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
		<div className='projects__items'>
			<div className='block-container'>
				<div className='projects__items_box'>
					<div className='projects__items-completed'>
						{projectsArray.map((item) => {
							return (
								<ProjectsItem
									projectAboutText={item.projectAboutText}
									projectHref={item.projectsHref}
									projectSrc={item.projectSrc}
									projectName={item.projectName}
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

export default ProjectsItems
