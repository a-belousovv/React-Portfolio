import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import ProjectsItem from '../../shared/ProjectsItem/ProjectsItem'

const Projects = () => {
	return (
		<div className='projects'>
			<div className='block-container'>
				<div className='projects__box'>
					<div className='projects__header'>
						<div className='projects__left'>
							<ContentHeaderTitle />
							<div className='projects__header_line'></div>
						</div>
						<div className='projects__right'>
							<h3 className='projects__header_view-title'>баттон море</h3>
							<h3 className='projects__header_view-arrow'>~~&gt;</h3>
						</div>
					</div>
					<div className='projects__items'>
						<ProjectsItem />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
