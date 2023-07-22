import './card.css'

import { useState } from 'react'

const Card = ({
	id,
	title,
	img,
	price,
	onPlus,
	onFavorite,
	isAdded,
	isFavorited,
}) => {
	const [isFavorite, setIsFavorite] = useState(isFavorited)

	const onClicToPlus = () => {
		onPlus({ id, title, img, price })
	}

	const onClickToFavorite = () => {
		onFavorite({ id, title, img, price })
		setIsFavorite(!isFavorite)
	}

	return (
		<div className='card'>
			<div className='card__container'>
				<img
					className='card__like'
					onClick={onClickToFavorite}
					height={40}
					src={isFavorite ? './img/liked.svg' : './img/unliked.svg'}
					alt='like'
				/>
				<img className='card__img' height={112} src={img} alt='sneakers' />
				<h3 className='card__title'>{title}</h3>
				<div className='card__bottom-section'>
					<div className='card__price'>
						<p>Цена:</p>
						<b>{price}p.</b>
					</div>
					<button className='card__btn'>
						<img
							onClick={onClicToPlus}
							src={isAdded ? './img/btn-added.svg' : './img/btn-plus.svg'}
							alt='add button'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
