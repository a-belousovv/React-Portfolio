import { SkillsItemInterface } from '../../../@types/components/blocks/Skills/types'
import { useData } from '../../../requests/useData'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import SkillsItem from '../../shared/SkillsItem/SkillsItem'

const Skills = () => {
	const { data, isSuccess } = useData(['skills'], 'skills')
	if (!isSuccess) return null

	return (
		<div className='skills'>
			<div className='block-container'>
				<div className='skills__box'>
					<div className='skills__header'>
						<ContentHeaderTitle title={data.skillsTitle} />
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
							{data.skillsItems.map((item: SkillsItemInterface) => {
								return (
									<SkillsItem
										key={item.id}
										id={item.id}
										content={item.content}
										title={item.title}
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
