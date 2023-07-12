import './index.css'

import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch('https://649009021e6aa71680ca6400.mockapi.io/items')
			.then(responce => responce.json())
			.then(data => setItems(data))
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<Home items={items} />
		</div>
	)
}

export default App
