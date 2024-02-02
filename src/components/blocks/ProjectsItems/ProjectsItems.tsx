import ProjectsItem from '../../shared/ProjectsItem/ProjectsItem'
const ProjectsItems = () => {
	return (
		<div className='projects__items'>
			<div className='block-container'>
				<div className='projects__items_box'>
					<div className='projects__items-completed'>
						<ProjectsItem />
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProjectsItems
