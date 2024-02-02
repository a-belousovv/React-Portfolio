const LoadingPage = () => {
	return (
		<div className='loading-page'>
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
