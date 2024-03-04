import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation.tsx'
import HeaderOtherPages from '../../components/shared/HeaderOtherPages/HeaderOtherPages'
import ProjectsItems from '../../components/blocks/ProjectsItems/ProjectsItems.tsx'
const ProjectsPage = () => {
	return (
		<div className='about-page'>
			<Navigation />
			<HeaderOtherPages title='projects' subtitle='List of my projects' />
			<ProjectsItems />
			<Footer />
		</div>
	)
}

export default ProjectsPage
