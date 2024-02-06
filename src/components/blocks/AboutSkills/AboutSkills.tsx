import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import SkillsItem from '../../shared/SkillsItem/SkillsItem'

const AboutSkills = () => {
	return (
		<div className='about__skills'>
			<div className='block-container'>
				<div className='about__skills_box'>
					<ContentHeaderTitle text='skills' />
					<div className='about__skills_items'>
						<SkillsItem />
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutSkills
