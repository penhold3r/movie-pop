import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import imageLoaded from '../utils/image-loaded'

const ShowCard = ({ show }) => {
	const image = show.image
		? show.image.medium
		: 'https://via.placeholder.com/210x295?text=MoviePop'

	// ref to img element callbak
	const imageRef = useCallback(img => {
		img && imageLoaded(img, () => img.classList.add('loaded'))
	}, [])

	return (
		<Link to={`/show/${show.id}`} className='show-card'>
			<div className='show-card__image'>
				<img src={image} alt={show.name} ref={imageRef} />
			</div>
			<h3 className='show-card__title'>{show.name}</h3>
			<div className='show-card__button button'>View more</div>
		</Link>
	)
}

export default ShowCard
