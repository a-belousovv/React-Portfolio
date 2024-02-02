import React from 'react'
import { Link } from 'react-router-dom'

const ContactsMessage: React.FC = () => {
	return (
		<div className='contacts__content_right'>
			<h3 className='contacts__right_title'>telergam</h3>
			<div className='contacts__right_items'>
				<Link target='_blank' to='/' className='contacts__items_item'>
					<div className='contacts__item_img'>
						<img src='/icons/socials/telegram.svg' alt='' />
					</div>
					<h4 className='contacts__item_title'>telegram</h4>
				</Link>
			</div>
		</div>
	)
}

export default ContactsMessage
