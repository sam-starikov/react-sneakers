import './index.css'

import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header, Drawer, Home, Favorites, Orders } from './components/imports'

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
		fetch('https://649009021e6aa71680ca6400.mockapi.io/cart')
			.then(responce => responce.json())
			.then(data => {
				setCartItems(data)
			})
	}, [])

	const openCart = () => {
		setCartOpened(!cartOpened)
	}

	const addToCart = obj => {
		if (cartItems.find(el => el._id === obj._id)) {
			setCartItems(prev => prev.filter(el => el.title !== obj.title))
		} else {
			setCartItems(prev => [...prev, obj])
			fetch('https://649009021e6aa71680ca6400.mockapi.io/cart', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(obj),
			})
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
		// fetch(`https://649009021e6aa71680ca6400.mockapi.io/cart/${id}`, {
		// 	method: 'DELETE',
		// })
	}

	const checkIsAddedItem = (arr, obj) => {
		return arr.some(el => el.title === obj.title)
	}

	const totalAmount = cartItems.reduce((prev, obj) => prev + obj.price, 0)

	return (
		<AppContex.Provider
			value={{ totalAmount, cartItems, favoritesItems, checkIsAddedItem }}>
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
					<Route path='/orders' element={<Orders isLoading={isLoading} />} />
				</Routes>
			</div>
		</AppContex.Provider>
	)
}

export default App
