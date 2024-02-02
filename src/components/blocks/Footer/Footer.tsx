import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='block-container'>
				<div className='footer__box'>
					<div className='footer__top'>
						<div className='footer__top_left'>
							<Link target='_blank' to='/' className='footer__left_item'>
								что то <span>хз ято это</span>
							</Link>
							<h3 className='footer__left_item'>эбоут ми</h3>
						</div>
						<div className='footer__top_right'>
							<h3 className='footer__right_item'>медиа татайл</h3>
							<div className='footer__right_socials'>
								<Link
									target='_blank'
									to='https://t.me/justinternetuser'
									className='footer__socials_item'>
									<img src='/icons/socials/telegram.svg' alt='' />
								</Link>
							</div>
						</div>
					</div>
					<div className='footer__bottom'>
						<h3 className='footer__bottom_title'>copy right</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
