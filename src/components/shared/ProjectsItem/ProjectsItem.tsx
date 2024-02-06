const ProjectsItem: React.FC = () => {
	return (
		<div className='projects__items_item'>
			<div className='projects__item_img'>
				<img src='/images/projects/projects-item-1.jpg' alt='' />
			</div>
			<div className='projects__item_stack'>
				<h4 className='projects__stack_item'>стек айтем</h4>
			</div>
			<div className='projects__item_content'>
				<h3 className='projects__content_title'>проджект тайтл</h3>
				<h4 className='projects__content_text'>проджект текст</h4>
				<div className='projects__content_buttons'>
					<div className='projects__buttons_item'>
						<h4 className='projects__item_title'>Live</h4>
						<span>&lt;~&gt;</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectsItem
