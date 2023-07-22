import './index.css'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Drawer from './components/Drawer/Drawer'
import Favorites from './pages/Favortes/Favorites'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favoritesItems, setFavoritesItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://649009021e6aa71680ca6400.mockapi.io/items')
			.then(responce => responce.json())
			.then(data => {
				setItems(data)
				setIsLoading(false)
			})
	}, [])

	const openCart = () => {
		setCartOpened(!cartOpened)
	}

	const addToCart = obj => {
		if (cartItems.find(el => el.title === obj.title)) {
			setCartItems(prev => prev.filter(el => el.title !== obj.title))
		} else {
			setCartItems(prev => [...prev, obj])
		}
	}

	const addToFavorites = obj => {
		if (favoritesItems.find(el => el.title === obj.title)) {
			setFavoritesItems(prev => prev.filter(el => el.title !== obj.title))
		} else {
			setFavoritesItems(prev => [...prev, obj])
		}
	}

	const deleteItemToCart = id => {
		setCartItems(prev => prev.filter(obj => obj.id !== id))
	}

	const totalAmount = cartItems.reduce((prev, obj) => prev + obj.price, 0)

	return (
		<>
			<div className='wrapper'>
				{cartOpened && (
					<Drawer
						cartItems={cartItems}
						onClose={() => setCartOpened(false)}
						onDelete={deleteItemToCart}
						totalAmount={totalAmount}
					/>
				)}
				<Header
					cartItems={cartItems}
					favoritesItems={favoritesItems}
					openCart={openCart}
					totalAmount={totalAmount}
				/>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								items={items}
								cartItems={cartItems}
								favoritesItems={favoritesItems}
								addToCart={addToCart}
								addToFavorites={addToFavorites}
								isLoading={isLoading}
							/>
						}
					/>
					<Route
						path='/favorites'
						element={
							<Favorites
								favoritesItems={favoritesItems}
								cartItems={cartItems}
								addToCart={addToCart}
								addToFavorites={addToFavorites}
								isLoading={isLoading}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	)
}

export default App
