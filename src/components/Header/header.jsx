import './header.css'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container container'>
				<div className='header__logo-block'>
					<img className='header__logo' src='./img/logo.svg' alt='logo' />
					<div className='header__title-block'>
						<h3 className='header__title'>REACT SNEAKERS</h3>
						<p className='header__sub-title'>Магазин лучших кроссовок</p>
					</div>
				</div>

				<div className='header__menu menu'>
					<ul className='menu__list'>
						<li className='menu__item'>
							<img className='menu__icon' src='./img/cart.svg' alt='cart' />
							<span className='menu__price'>12.000 руб.</span>
						</li>
						<li className='menu__item'>
							<img
								className='menu__icon'
								src='./img/favorite.svg'
								alt='favorite'
							/>
						</li>
						<li className='menu__item'>
							<img className='menu__icon' src='./img/user.svg' alt='user' />
						</li>
					</ul>
				</div>
			</div>
			<hr className='header__line' />
		</header>
	)
}

export default Header
