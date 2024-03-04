import { AboutSkillsItemProps } from '../../../@types/About/AboutTypes'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import SkillsItem from '../../shared/SkillsItem/SkillsItem'

const AboutSkills = () => {
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
		<div className='about__skills'>
			<div className='block-container'>
				<div className='about__skills_box'>
					<ContentHeaderTitle text='skills' />
					<div className='about__skills_items'>
						{skillsItems.map((item: AboutSkillsItemProps) => {
							return (
								<SkillsItem
									key={item.id}
									id={item.id}
									title={item.title}
									content={item.content}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutSkills
