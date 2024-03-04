import AboutInfo from '../../components/blocks/AboutInfo/AboutInfo'
import AboutSkills from '../../components/blocks/AboutSkills/AboutSkills'
import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation.tsx'
import HeaderOtherPages from '../../components/shared/HeaderOtherPages/HeaderOtherPages'
const AboutPage = () => {
	return (
		<div className='about-page'>
			<Navigation />
			<HeaderOtherPages title='about me' subtitle='Who am i?' />
			<AboutInfo />
			<AboutSkills />
			<Footer />
		</div>
	)
}

export default AboutPage
