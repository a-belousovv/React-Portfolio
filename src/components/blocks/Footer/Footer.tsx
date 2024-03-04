import { Link } from 'react-router-dom'

const Footer = () => {
	const footerMediaItems = [
		{
			id: 'telegram-id',
			imgSrc: '/icons/socials/telegram.svg',
			linkHref: 'https:/t.me/justinternetuser',
		},
		{
			id: 'gmail-id',
			imgSrc: '/icons/socials/email.svg',
			linkHref: 'mailto:aleksander.belousovv@gmail.com',
		},
		{
			id: 'github-id',
			imgSrc: '/icons/socials/github.svg',
			linkHref: 'https://github.com/a-belousovv',
		},
	]
	return (
		<div className='footer'>
			<div className='block-container'>
				<div className='footer__box'>
					<div className='footer__top'>
						<div className='footer__top_left'>
							<Link
								target='_blank'
								to='https:/t.me/justinternetuser'
								className='footer__left_item'>
								Alex <span>@justinternetuser</span>
							</Link>
							<h3 className='footer__left_item'>React Frontend Developer</h3>
						</div>
						<div className='footer__top_right'>
							<h3 className='footer__right_item'>Media</h3>
							<div className='footer__right_socials'>
								{footerMediaItems.map((item) => {
									return (
										<Link
											key={item.id}
											target='_blank'
											to={item.linkHref}
											className='footer__socials_item'>
											<img src={item.imgSrc} alt='' />
										</Link>
									)
								})}
							</div>
						</div>
					</div>
					<div className='footer__bottom'>
						<h3 className='footer__bottom_title'>
							© Copyright 2024. Made by Alex
						</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
