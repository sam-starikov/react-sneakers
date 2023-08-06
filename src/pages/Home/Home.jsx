import './home.css'

import { useContext, useState } from 'react'

import { AppContex } from '../../App'

import { Card, Skeleton, SimpleSlider } from '../../components/imports'

const Home = ({ goods = [], addToCart, addToFavorites, isLoading }) => {
	const [searchValue, setSearchValue] = useState('')
	const { cartItems, favoritesItems, checkIsAddedItem } = useContext(AppContex)

	const onChangeInput = event => {
		setSearchValue(event.target.value)
	}
	const filteredItems = goods.filter(obj =>
		obj.title.toLowerCase().includes(searchValue.toLowerCase())
	)

	return (
		<div className='home container'>
			<SimpleSlider />
			<div className='home__top-section'>
				<h1 className='home__title title'>
					{searchValue
						? `По запросу '${searchValue}' найденно ${filteredItems.length} шт.`
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
					: filteredItems.map(obj => (
							<Card
								key={obj._id}
								onPlus={obj => addToCart(obj)}
								onFavorite={obj => addToFavorites(obj)}
								isAdded={checkIsAddedItem(cartItems, obj)}
								isFavorited={checkIsAddedItem(favoritesItems, obj)}
								{...obj}
							/>
					  ))}
			</div>
		</div>
	)
}

export default Home
