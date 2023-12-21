import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation.tsx'
import ProjectsItems from '../../components/blocks/ProjectsItems/ProjectsItems'
import HeaderOtherPages from '../../components/shared/HeaderOtherPages/HeaderOtherPages'
import LoadingPage from '../LoadingPage/LoadingPage.tsx'

const ProjectsPage = () => {
	return (
		<div className='about-page'>
			<Navigation activeLink='projects' />
			<LoadingPage />
			<HeaderOtherPages id='projects' />
			<ProjectsItems />
			<Footer />
		</div>
	)
}

export default ProjectsPage
