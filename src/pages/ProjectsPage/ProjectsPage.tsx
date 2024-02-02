import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation.tsx'
import ProjectsItems from '../../components/blocks/ProjectsItems/ProjectsItems'
import HeaderOtherPages from '../../components/shared/HeaderOtherPages/HeaderOtherPages'
const ProjectsPage = () => {
	return (
		<div className='about-page'>
			<Navigation />
			<HeaderOtherPages />
			<ProjectsItems />
			<Footer />
		</div>
	)
}

export default ProjectsPage
