import About from '../../components/blocks/About/About'
import { Contacts } from '../../components/blocks/Contacts/Contacts'
import Footer from '../../components/blocks/Footer/Footer'
import Header from '../../components/blocks/Header/Header'
import Navigation from '../../components/blocks/Navigation/Navigation'
import Projects from '../../components/blocks/Projects/Projects'
import Skills from '../../components/blocks/Skills/Skills'

const MainPage = () => {
	return (
		<div className='main-page'>
			<Navigation />
			<Header />
			<Projects />
			<Skills />
			<About />
			<Contacts />
			<Footer />
		</div>
	)
}

export default MainPage
