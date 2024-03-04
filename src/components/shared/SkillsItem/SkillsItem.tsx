import React from 'react'
import { SkillsItemProps } from '../../../@types/Skills/SkillsTypes'
const SkillsItem: React.FC<SkillsItemProps> = ({ title, content }) => {
	return (
		<div className='skills__content_item'>
			<h3 className='item__content_title'>{title}</h3>
			<div className='item__content_elements'>
				{content.map((item) => {
					return (
						<h4 className='elements__item' key={item.id}>
							{item.title}
						</h4>
					)
				})}
			</div>
		</div>
	)
}

export default SkillsItem
