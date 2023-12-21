import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import ContactsMessage from '../../shared/ContactsMessage/ContactsMessage'
import { useData } from '../../../requests/useData'

const Contacts = () => {
	const { data, isSuccess } = useData(['contacts'], 'contact')
	if (!isSuccess) return null

	return (
		<div className='contacts'>
			<div className='block-container'>
				<div className='contacts__box'>
					<div className='contacts__header'>
						<ContentHeaderTitle title={data.contactsTitle} />
						<div className='contacts__header_box'></div>
					</div>
					<div className='contacts__content'>
						<div className='contacts__content_left'>
							<h3 className='contacts__left_title'>{data.contactsText}</h3>
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

export default Contacts
