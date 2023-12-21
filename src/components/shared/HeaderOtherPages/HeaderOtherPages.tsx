import React, { useEffect, useRef } from 'react'
import { useData } from '../../../requests/useData'
import {
	HeaderOtherFindItem,
	HeaderOtherPagesInterface,
} from '../../../@types/components/shared/HeaderOtherPages/HeaderOtherPages'

const HeaderOtherPages: React.FC<HeaderOtherPagesInterface> = ({ id }) => {
	const { data, isSuccess } = useData(['headerOthers'], 'headerOthers')
	const headerBoxRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		setTimeout(() => {
			if (headerBoxRef.current) {
				headerBoxRef.current.classList.add('animation')
			}
		}, 3500)
	}, [])

	if (!isSuccess) return null
	const findItem = data.items.find((item: HeaderOtherFindItem) => item.id == id)
	if (!findItem) return null

	return (
		<div className='header-other-pages'>
			<div className='block-container'>
				<div className='header__box' ref={headerBoxRef}>
					<h3 className='header__title'>
						<span>/</span>
						{findItem.title}
					</h3>
					<p className='header__text'>{findItem.subtitle}</p>
				</div>
			</div>
		</div>
	)
}

export default HeaderOtherPages
