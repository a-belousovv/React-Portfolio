import { AboutInterface } from '../../../@types/components/blocks/About/types'

import { useData } from '../../../requests/useData'
import ContentHeaderTitle from '../../shared/ContentHeaderTitle/ContentHeaderTitle'

const About = () => {
	const { data, isSuccess } = useData(['about'], 'about')
	if (!isSuccess) return null
	return (
		<div className='about'>
			<div className='block-container'>
				<div className='about__box'>
					<div className='about__header'>
						<ContentHeaderTitle title={data.aboutTitle} />
						<div className='about__header_box'></div>
					</div>
					<div className='about__content'>
						<div className='about__content_left'>
							{data.contentItems.map((item: AboutInterface) => {
								return (
									<h3 key={item.id} className='about__content_text'>
										{item.title}
									</h3>
								)
							})}
							<div className='about__content_button'>
								<p>Read more</p> <span>-&gt;</span>
							</div>
						</div>
						<div className='about__content_img'>
							<img src='/images/about/about-img.png' alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
