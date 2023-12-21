import AboutInfo from '../../components/blocks/AboutInfo/AboutInfo'
import AboutSkills from '../../components/blocks/AboutSkills/AboutSkills'
import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation.tsx'
import HeaderOtherPages from '../../components/shared/HeaderOtherPages/HeaderOtherPages'
import LoadingPage from '../LoadingPage/LoadingPage.tsx'

const AboutPage = () => {
	return (
		<div className='about-page'>
			<Navigation activeLink='about' />
			<LoadingPage />
			<HeaderOtherPages id='about' />
			<AboutInfo />
			<AboutSkills />
			<Footer />
		</div>
	)
}

export default AboutPage
