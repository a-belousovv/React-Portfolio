import ContactsHeader from '../../components/blocks/ContactsHeader/ContactsHeader'
import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation.tsx'
import HeaderOtherPages from '../../components/shared/HeaderOtherPages/HeaderOtherPages'
const ContactsPage = () => {
	return (
		<div>
			<Navigation />
			<HeaderOtherPages />
			<ContactsHeader />
			<Footer />
		</div>
	)
}

export default ContactsPage
