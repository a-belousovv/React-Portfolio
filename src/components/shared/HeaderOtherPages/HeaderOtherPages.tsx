import React from 'react'
import { HeaderOtherPagesProps } from '../../../@types/Header/interface'

const HeaderOtherPages: React.FC<HeaderOtherPagesProps> = ({
	title,
	subtitle,
}) => {
	return (
		<div className='header-other-pages'>
			<div className='block-container'>
				<div className='header__box'>
					<h3 className='header__title'>
						<span>/</span>
						{title}
					</h3>
					<p className='header__text'>{subtitle}</p>
				</div>
			</div>
		</div>
	)
}

export default HeaderOtherPages
