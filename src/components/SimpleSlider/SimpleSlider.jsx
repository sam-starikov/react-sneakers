import './slick.css'
import './slick-theme.css'

import Slider from 'react-slick'
import MySlider from '../Slider/MySlider'

function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<Slider {...settings}>
			<MySlider />
			<MySlider />
			<MySlider />
			<MySlider />
			<MySlider />
			<MySlider />
			<MySlider />
		</Slider>
	)
}

export default SimpleSlider
