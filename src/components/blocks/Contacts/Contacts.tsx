import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import ContactsMessage from '../../shared/ContactsMessage/ContactsMessage'

export const Contacts = () => {
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
							<h3 className='contacts__left_title'>contactsText</h3>
						</div>
						<ContactsMessage />
					</div>
				</div>
			</div>
		</div>
	)
}
