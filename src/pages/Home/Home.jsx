import './home.css'

import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'

const Home = () => {
	return (
		<div className='home'>
			<Slider />
			<div className='home__top-section container'>
				<h1 className='home__title'>Все кроссовки</h1>
				<div className='home__search'>
					<img src='./img/search.svg' alt='search' />
					<input type='text' placeholder='Поиск...' />
				</div>
			</div>
			<div className='card-section container'>
				<Card />
			</div>
		</div>
	)
}

export default Home
