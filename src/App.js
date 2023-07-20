import './index.css'

import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Drawer from './components/Drawer/Drawer'
import Favorites from './pages/Favortes/Favorites'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

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

	const deleteItemToCart = id => {
		setCartItems(prev => prev.filter(obj => obj.id !== id))
	}

	const totalAmount = cartItems.reduce((prev, obj) => prev + obj.price, 0)

	useEffect(() => {
		fetch('https://649009021e6aa71680ca6400.mockapi.io/items')
			.then(responce => responce.json())
			.then(data => {
				setItems(data)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			<div className='wrapper'>
				{cartOpened && (
					<Drawer
						items={cartItems}
						onClose={() => setCartOpened(false)}
						onDelete={deleteItemToCart}
						totalAmount={totalAmount}
					/>
				)}
				<Header openCart={openCart} totalAmount={totalAmount} />

				<Routes>
					<Route
						path='/'
						element={
							<Home
								addToCart={addToCart}
								items={items}
								cartItems={cartItems}
								isLoading={isLoading}
							/>
						}
					/>
					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</div>
		</>
	)
}

export default App
