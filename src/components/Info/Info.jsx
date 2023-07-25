import './info.css'

import { Link } from 'react-router-dom'

function Info({ title, desc, img, onClose }) {
	return (
		<div className='info'>
			<img className='info__img' height={120} src={img} alt='' />
			<div className='info__typography'>
				<h1 className='info__title'>{title}</h1>
				<p className='info__sub-title'>{desc}</p>
			</div>
			<Link to='/'>
				<div className='info__btn btn' onClick={onClose}>
					<img height={17} src='img/arrow-back.svg' alt='arrow-back' />
					Вернуться назад
				</div>
			</Link>
		</div>
	)
}

export default Info
