import './index.css'

import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'

import Home from './pages/Home/Home'
import Favorites from './pages/Favortes/Favorites'

export const AppContex = createContext({})

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
		<AppContex.Provider value={{ totalAmount, cartItems, favoritesItems }}>
			<div className='wrapper'>
				{cartOpened && (
					<Drawer
						onClose={() => setCartOpened(false)}
						onDelete={deleteItemToCart}
					/>
				)}
				<Header openCart={openCart} />
				<Routes>
					<Route
						path='/'
						element={
							<Home
								goods={items}
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
								addToCart={addToCart}
								addToFavorites={addToFavorites}
								isLoading={isLoading}
							/>
						}
					/>
				</Routes>
			</div>
		</AppContex.Provider>
	)
}

export default App
