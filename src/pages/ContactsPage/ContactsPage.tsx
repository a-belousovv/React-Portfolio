import ContactsHeader from '../../components/blocks/ContactsHeader/ContactsHeader'
import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation.tsx'
import HeaderOtherPages from '../../components/shared/HeaderOtherPages/HeaderOtherPages'
import LoadingPage from '../LoadingPage/LoadingPage.tsx'

const ContactsPage = () => {
	return (
		<div>
			<Navigation activeLink='contacts' />
			<LoadingPage />
			<HeaderOtherPages id='contacts' />
			<ContactsHeader />
			<Footer />
		</div>
	)
}

export default ContactsPage
