import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../services/hooks/ReduxTsHooks'
import {
	setActiveLanguage,
	setIsBurger,
	setIsBurgerOpen,
	setIsOpenLanguage,
} from '../../../redux/slices/Navigation/NavigationSlice'

import { useData } from '../../../requests/useData'

//@TYPES
import {
	NavigationLanguageItem,
	NavigationLeftMenuItem,
	NavigationMenuItem,
	NavigationProperties,
} from '../../../@types/components/blocks/Navigation/types'

const Navigation: React.FC<NavigationProperties> = ({ activeLink }) => {
	const { data, isSuccess } = useData(['navigation'], 'navigation')
	const dispatch = useAppDispatch()
	//useSTATES

	//useSELSECTORS
	const isOpenLanguage = useAppSelector(
		(state) => state.navigation.isOpenLanguage
	)
	const activeLanguage = useAppSelector(
		(state) => state.navigation.activeLanguage
	)
	const isBurger = useAppSelector((state) => state.navigation.isBurger)
	const isBurgerOpen = useAppSelector((state) => state.navigation.isBurgerOpen)

	//useREFTS

	const navigationBoxRef = useRef<HTMLDivElement>(null)

	//useEFFECTS
	useEffect(() => {
		const width = window.innerWidth
		if (width <= 900) {
			dispatch(setIsBurger(true))
		} else {
			dispatch(setIsBurger(false))
		}
	}, [window.innerWidth])

	useEffect(() => {
		const body = document.body
		if (isBurgerOpen) {
			body.classList.add('hide')
		} else {
			body.classList.remove('hide')
		}
	}, [isBurgerOpen])

	useEffect(() => {
		setTimeout(() => {
			if (navigationBoxRef.current) {
				navigationBoxRef.current.classList.add('animation')
			}
		}, 3000)
	}, [])

	//FUNCTIOS
	const handleClick = (language: string) => {
		dispatch(setActiveLanguage(language))
		dispatch(setIsOpenLanguage(false))
	}
	if (!isSuccess) return null

	//CONSTS
	const navigationLeftItems = data.linksLeftMenu
	const navigationMenu = data.links
	const languageItems = data.languages
	const logoData = data.logo
	return (
		<div className={`navigation ${isBurger ? 'burger' : ''}`}>
			<div className='block-container'>
				<div className='navigation__box' ref={navigationBoxRef}>
					<div className='navigation__menu-left'>
						<div className='navigation__menu_line'></div>
						<div className='navigation__menu_items'>
							{navigationLeftItems.map((item: NavigationLeftMenuItem) => {
								return (
									<Link
										target='_blank'
										to={item.href}
										className='navigation__items_item '
										key={item.id}>
										<img src={item.img} alt='' />
									</Link>
								)
							})}
						</div>
					</div>
					<div
						className={`navigation__menu ${
							isBurgerOpen ? 'open-burger' : 'hide'
						}`}>
						<Link to='/' className='navigation__menu_logo'>
							<div className='navigation__logo_img'>
								<img src={logoData.img} alt='' />
							</div>
							<h3 className='navigation__logo_title'>{logoData.title}</h3>
						</Link>
						<div
							className='navigation__menu_button-burger'
							onClick={() => dispatch(setIsBurgerOpen(!isBurgerOpen))}></div>
						<div className='navigation__menu_items'>
							{navigationMenu.map((item: NavigationMenuItem) => {
								return (
									<Link
										to={item.href}
										className={`navigation__items_item ${
											activeLink == item.id ? 'active' : ''
										}`}
										key={item.id}>
										<span>/</span>
										<h3 className='navigation__item_title'>{item.title}</h3>
									</Link>
								)
							})}
							<div className='navigation__items_language'>
								<div
									className='navigation__language_header'
									onClick={() => dispatch(setIsOpenLanguage(!isOpenLanguage))}>
									<h3 className='navigation__header_title'>{activeLanguage}</h3>
									<div className='navigation__header_button'>
										<img src='/icons/navigation/language-button.svg' alt='' />
									</div>
								</div>
								<div
									className={`navigation__language_content ${
										isOpenLanguage ? 'open' : 'hide'
									}`}>
									{languageItems.content.map((item: NavigationLanguageItem) => {
										return (
											<div
												className='navigation__content_item'
												onClick={() => handleClick(item.language)}
												key={item.id}>
												{item.language}
											</div>
										)
									})}
								</div>
							</div>
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
