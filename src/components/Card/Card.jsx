import './card.css'

const Card = ({
	_id,
	title,
	img,
	price,
	onPlus,
	onFavorite,
	isAdded,
	isFavorited,
}) => {
	const onClicToPlus = () => {
		onPlus({ _id, title, img, price })
	}

	const onClickToFavorite = () => {
		onFavorite({ _id, title, img, price })
	}

	return (
		<div className='card'>
			<div className='card__container'>
				<img
					className='card__like'
					onClick={onClickToFavorite}
					height={40}
					src={isFavorited ? './img/liked.svg' : './img/unliked.svg'}
					alt='like'
				/>
				<img className='card__img' height={112} src={img} alt='sneakers' />
				<h3 className='card__title'>{title}</h3>
			</div>
			<div className='card__bottom-section'>
				<div className='card__price'>
					<p>Цена:</p>
					<b>{price}p.</b>
				</div>
				<div className='card__btn'>
					<img
						onClick={onClicToPlus}
						src={isAdded ? './img/btn-added.svg' : './img/btn-plus.svg'}
						alt='add button'
					/>
				</div>
			</div>
		</div>
	)
}

export default Card
