import { ContactsMessageItem } from '../../../@types/Contacts/interface'
import ContactsMessage from '../../shared/ContactsMessage/ContactsMessage'

const ContactsHeader = () => {
	const linkItems: ContactsMessageItem[] = [
		{
			id: 'telegram-id',
			imgSrc: '/icons/socials/telegram.svg',
			title: 'Telegram',
			linkText: '@justinternetuser',
			linkHref: 'https:/t.me/justinternetuser',
		},
		{
			id: 'card-id',
			imgSrc: '/icons/socials/telegram.svg',
			title: 'Support Me',
			linkText: '6700 2900 4500 5000',
			linkHref: 'https://belarusbank.by/',
		},
	]
	return (
		<div className='contacts__header'>
			<div className='block-container'>
				<div className='contacts__header_box'>
					<div className='contacts__header_left'>
						<h3 className='contacts__left_title'>
							I’m interested in freelance opportunities. However, if you have
							other request or question, don’t hesitate to contact me
						</h3>
					</div>
					<div className='contacts__header_right'>
						{linkItems.map((item) => {
							return <ContactsMessage key={item.id} {...item} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactsHeader
