import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import ContactsMessage from '../../shared/ContactsMessage/ContactsMessage'
import { ContactsMessageItem } from '../../../@types/Contacts/interface'

export const Contacts = () => {
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
		<div className='contacts'>
			<div className='block-container'>
				<div className='contacts__box'>
					<div className='contacts__header'>
						<ContentHeaderTitle text='contacts' />
						<div className='contacts__header_box'></div>
					</div>
					<div className='contacts__content'>
						<div className='contacts__content_left'>
							<h3 className='contacts__left_title'>
								I’m interested in freelance opportunities. However, if you have
								other request or question, don’t hesitate to contact me
							</h3>
						</div>
						{linkItems.map((item) => {
							return <ContactsMessage key={item.id} {...item} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
