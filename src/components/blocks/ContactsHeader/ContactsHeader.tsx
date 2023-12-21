import { useData } from '../../../requests/useData'
import ContactsMessage from '../../shared/ContactsMessage/ContactsMessage'

const ContactsHeader = () => {
	const { data, isSuccess } = useData(['contacts'], 'contact')
	if (!isSuccess) return null

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
						<div className='contacts__right_item'>
							<h3 className='contacts__item_title'>Support me here</h3>
							<p className='contacts__item_text'>6711 2900 4500 5000</p>
						</div>
						<ContactsMessage
							title={data.contactsMessage.title}
							linksItems={data.contactsMessage.linksItems}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactsHeader
