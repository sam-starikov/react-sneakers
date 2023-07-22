import './favorites.css'

import Skeleton from '../../components/Skeleton/Skeleton'
import Card from '../../components/Card/Card'
import Slider from '../../components/Slider/Slider'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContex } from '../../App'

function Favorites({ addToCart, addToFavorites, isLoading }) {
	const { cartItems, favoritesItems } = useContext(AppContex)

	return (
		<div className='favorites container'>
			<Slider />
			<h1 className='favorites__title'>Мои закладки</h1>
			{!favoritesItems.length && (
				<div className='favorites__empty-block empty-block'>
					<img
						className='empty-block__img'
						height={70}
						src='img/empty-favorites.jpg'
						alt='empty-favorites'
					/>
					<div className='empty-block__typography'>
						<h1 className='empty-block__title'>Закладок нет :(</h1>
						<p className='empty-block__sub-title'>
							Вы ничего не добавляли в закладки
						</p>
					</div>
					<Link to='/'>
						<div className='empty-block__btn btn'>
							<img height={17} src='img/arrow-back.svg' alt='arrow-back' />
							Вернуться назад
						</div>
					</Link>
				</div>
			)}
			<div className='favorites__content'>
				{isLoading
					? [...Array(8)].map((_, i) => <Skeleton key={i} />)
					: favoritesItems.map(obj => (
							<Card
								key={obj.id}
								onPlus={obj => addToCart(obj)}
								onFavorite={obj => addToFavorites(obj)}
								isAdded={cartItems.some(el => el.title === obj.title)}
								isFavorited={favoritesItems.some(el => el.title === obj.title)}
								{...obj}
							/>
					  ))}
			</div>
		</div>
	)
}

export default Favorites
