import { useEffect, useState } from 'react'

const LoadingPage = () => {
	const [isShow, setIsShow] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setIsShow(false)
		}, 1500)
	}, [])

	useEffect(() => {
		const body = document.body
		body.style.overflow = 'hidden'
		setTimeout(() => {
			body.style.removeProperty('overflow')
		}, 3500)
	}, [])

	return (
		<div className={`loading-page ${isShow == true ? '' : 'hide'}`}>
			<div className='block-container'>
				<div className='loading-page__box'>
					<div className='loading-page__loader'>
						<img src='/icons/loading/loading-infinity.svg' alt='' />
					</div>
					<h3 className='loading-page__title'>Loading Assets...</h3>
				</div>
			</div>
		</div>
	)
}

export default LoadingPage
