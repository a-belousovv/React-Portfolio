const AboutInfo = () => {
	return (
		<div className='about__info'>
			<div className='about__info_box'>
				<div className='about__left'>
					<h3 className='about__left_title'>Hello, i’m Elias!</h3>
					<h3 className='about__left_title'>
						I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
						develop responsive websites from scratch and raise them into modern
						user-friendly web experiences.{' '}
					</h3>
					<h3 className='about__left_title'>
						Transforming my creativity and knowledge into a websites has been my
						passion for over a year. I have been helping various clients to
						establish their presence online. I always strive to learn about the
						newest technologies and frameworks.
					</h3>
				</div>
				<div className='about__right'>
					<img src='/images/about/about-img.png' alt='' />
				</div>
			</div>
		</div>
	)
}

export default AboutInfo
