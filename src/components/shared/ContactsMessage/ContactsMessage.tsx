import React from 'react'
import { Link } from 'react-router-dom'
import { ContactsMessageItem } from '../../../@types/Contacts/interface'

const ContactsMessage: React.FC<ContactsMessageItem> = ({
	imgSrc,
	title,
	linkHref,
	linkText,
}) => {
	return (
		<div className='contacts__content_right'>
			<h3 className='contacts__right_title'>{title}</h3>
			<div className='contacts__right_items'>
				<Link target='_blank' to={linkHref} className='contacts__items_item'>
					<div className='contacts__item_img'>
						<img src={imgSrc} alt='' />
					</div>
					<h4 className='contacts__item_title'>{linkText}</h4>
				</Link>
			</div>
		</div>
	)
}

export default ContactsMessage
