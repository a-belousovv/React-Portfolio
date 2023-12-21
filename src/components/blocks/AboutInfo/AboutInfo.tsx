import { AboutInterface } from '../../../@types/components/blocks/About/types'
import { useData } from '../../../requests/useData'

const AboutInfo = () => {
	const { data, isSuccess } = useData(['about'], 'about')
	if (!isSuccess) return null
	return (
		<div className='about__info'>
			<div className='block-container'>
				<div className='about__info_box'>
					<div className='about__left'>
						{data.contentItems.map((item: AboutInterface) => {
							return (
								<h3 className='about__left_title' key={item.id}>
									{item.title}
								</h3>
							)
						})}
					</div>
					<div className='about__right'>
						<img src={data.aboutImg} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutInfo
