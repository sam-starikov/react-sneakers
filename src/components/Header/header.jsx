import './header.css'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container container'>
				<div className='header__logo logo'>
					<img width={40} height={40} src='./img/logo.svg' alt='logo' />
					<div className='logo__title'>
						<h3 className='logo__main-title'>REACT SNEAKERS</h3>
						<p className='logo__sub-title'>Магазин лучших кроссовок</p>
					</div>
				</div>
				<div className='header__menu'>
					<ul className='menu'>
						<li className='menu__item-cart'>
							<img src='./img/cart.svg' alt='cart' />
							<span>12.000 руб.</span>
						</li>
						<li className='menu__item'>
							<img src='./img/favorite.svg' alt='favorite' />
						</li>
						<li className='menu__item'>
							<img src='./img/user.svg' alt='user' />
						</li>
					</ul>
				</div>
			</div>
			<hr className='header__line' />
		</header>
	)
}

export default Header
