import React from 'react'
import {
	SkillsItemInterface,
	SkillsItemContent,
} from '../../../@types/components/blocks/Skills/types'

const SkillsItem: React.FC<SkillsItemInterface> = ({ id, title, content }) => {
	return (
		<div className='skills__content_item' key={id}>
			<h3 className='item__content_title'>{title}</h3>
			<div className='item__content_elements'>
				{content.map((item: SkillsItemContent) => {
					return (
						<h4 key={item.id} className='elements__item'>
							{item.title}
						</h4>
					)
				})}
			</div>
		</div>
	)
}

export default SkillsItem
