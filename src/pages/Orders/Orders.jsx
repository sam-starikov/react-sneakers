import '../Favortes/favorites.css'

import Skeleton from '../../components/Skeleton/Skeleton'
import Card from '../../components/Card/Card'
import Slider from '../../components/Slider/Slider'
import Info from '../../components/Info/Info'

import { useContext } from 'react'
import { AppContex } from '../../App'

function Orders({ addToCart, addToFavorites, isLoading }) {
	const { cartItems, favoritesItems, checkIsAddedItem } = useContext(AppContex)

	return (
		<div className='favorites container'>
			<Slider />
			<h1 className='favorites__title title'>Мои заказы</h1>
			<div className='favorites__content'>
				{isLoading ? (
					[...Array(8)].map((_, i) => <Skeleton key={i} />)
				) : !favoritesItems.length ? (
					<Info
						title={'У вас нет заказов'}
						desc={'Вы нищеброд? Оформите хотя бы один заказ.'}
						img={'img/empty-orders.jpg'}
					/>
				) : (
					favoritesItems.map(obj => (
						<Card
							key={obj.id}
							onPlus={obj => addToCart(obj)}
							onFavorite={obj => addToFavorites(obj)}
							isAdded={checkIsAddedItem(cartItems, obj)}
							isFavorited={checkIsAddedItem(favoritesItems, obj)}
							{...obj}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default Orders
