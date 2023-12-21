import React from 'react'
import { Link } from 'react-router-dom'
import { ContactsMessageInterface } from '../../../@types/components/blocks/Contacts/types'
const ContactsMessage: React.FC<ContactsMessageInterface> = ({
	title,
	linksItems,
}) => {
	return (
		<div className='contacts__content_right'>
			<h3 className='contacts__right_title'>{title}</h3>
			<div className='contacts__right_items'>
				{linksItems.map((item) => {
					return (
						<Link
							key={item.id}
							target='_blank'
							to={item.href}
							className='contacts__items_item'>
							<div className='contacts__item_img'>
								<img src='/icons/socials/telegram.svg' alt='' />
							</div>
							<h4 className='contacts__item_title'>{item.title}</h4>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default ContactsMessage
