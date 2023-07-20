function Favorites() {
	return (
		<div className='home container'>
			<div className='home__top-section'>
				<h1 className='home__title'>Избранное</h1>
			</div>
			<div className='home__content'>
				{/* {isLoading
					? [...Array(8)].map((_, i) => <Skeleton key={i} />)
					: items
							.filter(obj =>
								obj.title.toLowerCase().includes(searchValue.toLowerCase())
							)
							.map((obj, inx) => (
								<Card
									key={`${obj.id}_${inx}`}
									onPlus={obj => addToCart(obj)}
									onAdded={cartItems.some(el => el.title === obj.title)}
									{...obj}
								/>
							))} */}
			</div>
		</div>
	)
}

export default Favorites
