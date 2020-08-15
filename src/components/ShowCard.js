import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({ show }) => {
	const image = show.image
		? show.image.medium
		: 'https://via.placeholder.com/210x295?text=MoviePop'

	return (
		<Link to={`/show/${show.id}`} className='show-card'>
			<img src={image} alt={show.name} className='show-card__image' />
			<h3 className='show-card__title'>{show.name}</h3>
			<div className='show-card__button button'>View more</div>
		</Link>
	)
}

export default ShowCard
