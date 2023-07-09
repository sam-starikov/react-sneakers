import './card.css'

const Card = () => {
	return (
		<div className='card'>
			<div className='card__container'>
				<img
					className='card__like'
					height={40}
					src='./img/unliked.svg'
					alt='like'
				/>
				<img
					className='card__img'
					height={112}
					src='./img/sneakers/1.jpg'
					alt='sneakers'
				/>
				<h3 className='card__title'>Мужские Кроссовки Nike Blazer Mid Suede</h3>
				<div className='card__bottom'>
					<div className='card__price'>
						<p>Цена:</p>
						<b>15.000 p.</b>
					</div>
					<button className='card__btn'>
						<img src='./img/btn-plus.svg' alt='add button' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
