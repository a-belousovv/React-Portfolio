import { Link } from 'react-router-dom'
import { useData } from '../../../requests/useData'
import { useEffect, useRef } from 'react'

const Header = () => {
	const { data, isSuccess } = useData(['header'], 'header')
	const headerBoxRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		setTimeout(() => {
			if (headerBoxRef.current) {
				headerBoxRef.current.classList.add('animation')
			}
		}, 3500)
	}, [])

	if (!isSuccess) return null

	return (
		<div className='header'>
			<div className='block-container'>
				<div className='header__box' ref={headerBoxRef}>
					<div className='header__content'>
						<h1 className='header__content_title'>
							<span>{data.headerTitle.span}</span>
							{data.headerTitle.title}
						</h1>
						<h2 className='header__content_subtitle'>{data.headerText}</h2>
						<Link
							to={data.headerButtonText.link}
							className='header__content_button'>
							{data.headerButtonText.title}
						</Link>
					</div>
					<div className='header__img'>
						<div className='header__img-bg'>
							<img src='/icons/navigation/logo.svg' alt='' />
						</div>
						<img
							src='/images/header/header-img.png'
							alt=''
							className='header__img_person'
						/>
						<div className='header__img_banner'>
							<div className='header__banner_box'></div>
							<h3 className='header__banner_title'>
								{data.headerPostScriptum.title}
								<span>{data.headerPostScriptum.span}</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
