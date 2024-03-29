import { Link } from 'react-router-dom'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'
import AboutInfo from '../AboutInfo/AboutInfo'
const About = () => {
	return (
		<div className='about'>
			<div className='block-container'>
				<div className='about__box'>
					<div className='about__header'>
						<ContentHeaderTitle text='about-me' />
						<div className='about__header_box'></div>
					</div>
					<AboutInfo />
					<Link to='/about' className='about__button-more'>
						Read more -&gt;
					</Link>
				</div>
			</div>
		</div>
	)
}

export default About
