import './slider.css'

const MySlider = () => {
	return (
		<div className='home__slider slider'>
			<div className='slider__container '>
				<div className='slider__left-section'>
					<div className='slider__logo'>
						<img src='./img/slider-logo.jpg' alt='logo' />
					</div>
					<h3 className='slider__title'>
						<span>Sam Smith</span>,
						<br />
						Forever!
					</h3>
					<button className='slider__btn'>
						<img src='./img/slider-btn.svg' alt='button buy now' />
					</button>
				</div>
				<div className='slider__image'>
					<img
						height={300}
						width={641}
						src='./img/slider-img.png'
						alt='slider'
					/>
				</div>
			</div>
		</div>
	)
}

export default MySlider
