import './home.css'

const Home = () => {
	return (
		<div className='slider'>
			<div className='slider__container container'>
				<div>
					<h3 className='slider__title'>
						<span>Stan Smith,</span>
						Forever!
					</h3>
					<button>
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

export default Home
