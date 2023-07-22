import './home.css'

import { useContext, useState } from 'react'

import { AppContex } from '../../App'

import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
import Skeleton from '../../components/Skeleton/Skeleton'

const Home = ({ goods = [], addToCart, addToFavorites, isLoading }) => {
	const [searchValue, setSearchValue] = useState('')
	const { cartItems, favoritesItems } = useContext(AppContex)

	const onChangeInput = event => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='home container'>
			<Slider />
			<div className='home__top-section'>
				<h1 className='home__title'>
					{searchValue
						? `По запросу '${searchValue}' найденно ${items.length} шт.`
						: 'Все кроссовки'}
				</h1>
				<div className='home__search search'>
					<img
						className='search__search-image'
						src='./img/search.svg'
						alt='search'
					/>
					{searchValue && (
						<img
							className='search__remove-image'
							src='./img/btn-remove.svg'
							alt='remove'
							onClick={() => setSearchValue('')}
						/>
					)}
					<input
						className='search__input'
						onChange={onChangeInput}
						value={searchValue}
						type='text'
						placeholder='Поиск...'
					/>
				</div>
			</div>
			<div className='home__content'>
				{isLoading
					? [...Array(8)].map((_, i) => <Skeleton key={i} />)
					: goods
							.filter(obj =>
								obj.title.toLowerCase().includes(searchValue.toLowerCase())
							)
							.map(obj => (
								<Card
									key={obj.id}
									onPlus={obj => addToCart(obj)}
									onFavorite={obj => addToFavorites(obj)}
									isAdded={cartItems.some(el => el.title === obj.title)}
									isFavorited={favoritesItems.some(
										el => el.title === obj.title
									)}
									{...obj}
								/>
							))}
			</div>
		</div>
	)
}

export default Home
