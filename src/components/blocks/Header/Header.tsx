import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='header'>
			<div className='block-container'>
				<div className='header__box'>
					<div className='header__content'>
						<h1 className='header__content_title'>
							<span>хедер тайтл</span>
							хедер сабтайтл
						</h1>
						<h2 className='header__content_subtitle'>хедер текст</h2>
						<Link to='' className='header__content_button'>
							heder button
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
								хедер скриптум
								<span>хедер посткриптум спан</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
