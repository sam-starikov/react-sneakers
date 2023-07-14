import './index.css'

import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Drawer from './components/Drawer/Drawer'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)

	const openCart = () => {
		setCartOpened(!cartOpened)
	}

	const addToCart = obj => {
		setCartItems(prev => [...prev, obj])
	}

	const deleteItemToCart = id => {
		setCartItems(cartItems.filter(obj => obj.id !== id))
	}

	const totalAmount = cartItems.reduce((prev, obj) => prev + obj.price, 0)

	useEffect(() => {
		fetch('https://649009021e6aa71680ca6400.mockapi.io/items')
			.then(responce => responce.json())
			.then(data => setItems(data))
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
				<Home addToCart={addToCart} items={items} />
			</div>
		</>
	)
}

export default App
