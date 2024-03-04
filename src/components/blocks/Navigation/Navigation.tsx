import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
	const navigationRef = useRef<HTMLDivElement>(null)
	const body = document.body
	const [isOpenBurger, setIsOpenBurger] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth
			const navigationElement = navigationRef.current
			if (navigationElement) {
				navigationElement.classList.toggle('burger', screenWidth < 800)
			}
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleClick = () => {
		body.classList.toggle('hide')
		if (isOpenBurger) {
			setIsOpenBurger(false)
			navigationRef.current?.classList.remove('open-burger')
		} else {
			setIsOpenBurger(true)
			navigationRef.current?.classList.add('open-burger')
		}
	}
	return (
		<div className='navigation' ref={navigationRef}>
			<div className='block-container'>
				<div className='navigation__box'>
					<div className='navigation__menu-left'>
						<div className='navigation__menu_line'></div>
						<div className='navigation__menu_items'>
							<Link
								target='_blank'
								to='mailto:aleksander.belousovv@gmail.com'
								className='navigation__items_item '>
								<img src='/icons/socials/email.svg' alt='' />
							</Link>
							<Link
								target='_blank'
								to='https://t.me/justinternetuser'
								className='navigation__items_item '>
								<img src='/icons/socials/telegram.svg' alt='' />
							</Link>
							<Link
								target='_blank'
								to='https://github.com/a-belousovv'
								className='navigation__items_item '>
								<img src='/icons/socials/github.svg' alt='' />
							</Link>
						</div>
					</div>
					<div className={'navigation__menu'}>
						<Link to='/' className='navigation__menu_logo'>
							<div className='navigation__logo_img'>
								<img src='/icons/navigation/logo.svg' alt='' />
							</div>
							<h3 className='navigation__logo_title'>Alex</h3>
						</Link>
						<div
							onClick={() => handleClick()}
							className='navigation__menu_button-burger'></div>
						<div className='navigation__menu_items'>
							<Link to='/' className='navigation__items_item'>
								<h3 className='navigation__item_title'>home</h3>
							</Link>
							<Link to='/about' className='navigation__items_item'>
								<h3 className='navigation__item_title'>about me</h3>
							</Link>
							<Link to='/projects' className='navigation__items_item'>
								<h3 className='navigation__item_title'>projects</h3>
							</Link>
							<Link to='/contacts' className='navigation__items_item'>
								<h3 className='navigation__item_title'>contacts</h3>
							</Link>
						</div>
					</div>
				</div>
				<div className='navigation__burger'>
					<div className='navigation__burger_header'>
						<h3 className='navigation__header_title'></h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
