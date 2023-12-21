import { Link } from 'react-router-dom'
import { useData } from '../../../requests/useData'
import {
	FooterLeftLinksItem,
	FooterMediaItem,
} from '../../../@types/components/blocks/Footer/types'
const Footer = () => {
	const { data, isSuccess } = useData(['footer'], 'footer')
	if (!isSuccess) return null

	return (
		<div className='footer'>
			<div className='block-container'>
				<div className='footer__box'>
					<div className='footer__top'>
						<div className='footer__top_left'>
							{data.footerLinks.map((item: FooterLeftLinksItem) => {
								return (
									<Link
										key={item.id}
										target='_blank'
										to={item.href}
										className='footer__left_item'>
										{item.title} <span>{item.subtitle}</span>
									</Link>
								)
							})}

							<h3 className='footer__left_item'>{data.footerAboutMe}</h3>
						</div>
						<div className='footer__top_right'>
							<h3 className='footer__right_item'>{data.footerMedia.title}</h3>
							<div className='footer__right_socials'>
								{data.footerMedia.content.map((item: FooterMediaItem) => {
									return (
										<Link
											key={item.id}
											target='_blank'
											to='https://t.me/justinternetuser'
											className='footer__socials_item'>
											<img src={item.img} alt='' />
										</Link>
									)
								})}
							</div>
						</div>
					</div>
					<div className='footer__bottom'>
						<h3 className='footer__bottom_title'>{data.footerCopyRight}</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
