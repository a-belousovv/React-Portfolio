import { SkillsItemProps } from '../../../@types/Skills/SkillsTypes'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import SkillsItem from '../../shared/SkillsItem/SkillsItem'

const Skills = () => {
	const skillsItems = [
		{
			id: 'Languages_Id',
			title: 'Languages',
			content: [
				{ id: 'HTML5_Id', title: 'HTML5' },
				{ id: 'CSS3_Id', title: 'CSS3' },
				{ id: 'JavaScript_Id', title: 'JavaScript' },
			],
		},
		{
			id: 'Frameworks_Id',
			title: 'FrameWorks',
			content: [
				{ id: 'React_Id', title: 'React' },
				{ id: 'Vue_Id', title: 'Vue' },
			],
		},
		{
			id: 'Other_Id',
			title: 'Other',
			content: [
				{ id: 'Redux_ToolKit_Id', title: 'Redux ToolKit' },
				{ id: 'Vue_Router_Id', title: 'Vue Router' },
				{ id: 'TypeScript_Id', title: 'TypeScript' },
				{ id: 'TanstackQuery_Id', title: 'TanstackQuery v4' },
				{ id: 'SCSS_Id', title: 'SCSS' },
				{ id: 'React_Router_Id', title: 'React Router' },
				{ id: 'Figma_Pixso_Id', title: 'Figma / Pixso' },
			],
		},
	]
	return (
		<div className='skills'>
			<div className='block-container'>
				<div className='skills__box'>
					<div className='skills__header'>
						<ContentHeaderTitle text='skills' />
						<div className='skills__header_line'></div>
					</div>
					<div className='skills__content'>
						<div className='skills__content_img'>
							<div className='skills__img_dots first'>
								<img src='/images/projects/dots.png' alt='' />
							</div>
							<div className='skills__img_dots second'>
								<img src='/images/projects/dots.png' alt='' />
							</div>
							<div className='skills__img_rectangle small'>
								<img src='/images/projects/rectangle.png' alt='' />
							</div>
							<div className='skills__img_rectangle big'>
								<img src='/images/projects/rectangle.png' alt='' />
							</div>
							<div className='skills__img_logo'>
								<img src='/icons/navigation/logo.svg' alt='' />
							</div>
						</div>
						<div className='skills__content_box'>
							{skillsItems.map((item: SkillsItemProps) => {
								return (
									<SkillsItem
										id={item.id}
										key={item.id}
										title={item.title}
										content={item.content}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
