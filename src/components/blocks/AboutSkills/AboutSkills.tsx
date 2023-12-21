import { SkillsItemInterface } from '../../../@types/components/blocks/Skills/types'
import { useData } from '../../../requests/useData'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import SkillsItem from '../../shared/SkillsItem/SkillsItem'

const AboutSkills = () => {
	const { data, isSuccess } = useData(['skills'], 'skills')
	if (!isSuccess) return null
	return (
		<div className='about__skills'>
			<div className='block-container'>
				<div className='about__skills_box'>
					<ContentHeaderTitle title='skills' />
					<div className='about__skills_items'>
						{data.skillsItems.map((item: SkillsItemInterface) => {
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
