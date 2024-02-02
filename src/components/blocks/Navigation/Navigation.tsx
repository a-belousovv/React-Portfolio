import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
	return (
		<div className='navigation'>
			<div className='block-container'>
				<div className='navigation__box'>
					<div className='navigation__menu-left'>
						<div className='navigation__menu_line'></div>
						<div className='navigation__menu_items'>
							<Link target='_blank' to='' className='navigation__items_item '>
								<img src='/icons/socials/email.svg' alt='' />
							</Link>
						</div>
					</div>
					<div className='navigation__menu'>
						<Link to='/' className='navigation__menu_logo'>
							<div className='navigation__logo_img'>
								<img src='/icons/navigation/logo.svg' alt='' />
							</div>
							<h3 className='navigation__logo_title'>Alex</h3>
						</Link>
						<div className='navigation__menu_button-burger'></div>
						<div className='navigation__menu_items'>
							<Link to='/' className='navigation__items_item'>
								<span>/</span>
								<h3 className='navigation__item_title'>home</h3>
							</Link>
							<Link to='/about' className='navigation__items_item'>
								<span>/</span>
								<h3 className='navigation__item_title'>about me</h3>
							</Link>
							<Link to='/projects' className='navigation__items_item'>
								<span>/</span>
								<h3 className='navigation__item_title'>projects</h3>
							</Link>
							<Link to='/contacts' className='navigation__items_item'>
								<span>/</span>
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
