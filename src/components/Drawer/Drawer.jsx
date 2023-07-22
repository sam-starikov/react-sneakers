import './drawer.css'

function Drawer({ cartItems = [], totalAmount, onDelete, onClose }) {
	const calcPercent = Math.round((totalAmount / 100) * 5)

	return (
		<div className='drawer'>
			<div className='drawer__overlay' onClick={onClose} />
			<div className='drawer__cart cart'>
				<div className='cart__top-section'>
					<h1 className='cart__title'>Корзина</h1>
					<img
						className='cart__remove-btn'
						src='./img/btn-remove.svg'
						alt='remove'
						width={32}
						height={32}
						onClick={onClose}
					/>
				</div>
				<>
					<div
						className={
							cartItems.length
								? 'cart__container'
								: 'cart__container cart__container_empty '
						}>
						{!cartItems.length ? (
							<div className='cart__empty'>
								<img src='img/empty-cart.jpg' alt='empty-cart' />
								<div className='cart__empty__btn btn' onClick={onClose}>
									<img height={17} src='img/arrow-back.svg' alt='arrow-back' />
									Вернуться назад
								</div>
							</div>
						) : (
							cartItems.map((el, i) => (
								<div className='cart__item item' key={`${el.id}_${i}`}>
									<img
										className='item__image'
										src={el.img}
										alt={el.title}
										width={70}
										height={70}
									/>
									<div className='item__description'>
										<p className='item__title'>{el.title}</p>
										<b className='item__price'>{el.price} р.</b>
									</div>
									<img
										className='cart__remove-btn'
										src='./img/btn-remove.svg'
										alt='remove'
										width={32}
										height={32}
										onClick={() => onDelete(el.id)}
									/>
								</div>
							))
						)}
					</div>
					{cartItems.length > 0 && (
						<ul className='cart__price-section'>
							<li className='cart__total-price'>
								<span>Цена:</span>
								<div className='cart__separated-price' />
								<b>{totalAmount} р.</b>
							</li>
							<li className='cart__tax'>
								<span>Налог 5%:</span>
								<div className='cart__separated-price' />
								<b>{calcPercent} р.</b>
							</li>
							<button className='cart__btn-order'>
								<span> Оформить заказ</span>
								<img src='./img/arrow.svg' alt='arrow' />
							</button>
						</ul>
					)}
				</>
			</div>
		</div>
	)
}

export default Drawer
