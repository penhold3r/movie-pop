import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { unSaveShow } from '../redux/actions/showActions'

import imageLoaded from '../utils/image-loaded'
import Button from './Button'

const FavoriteCard = ({ show, unSaveShow }) => {
	// check if show has poster, otherwise use placeholder
	const image = show.image
		? show.image.medium
		: 'https://via.placeholder.com/210x295?text=MoviePop'

	// ref to img element callbak
	const imageRef = useCallback(img => {
		if (img) {
			img.parentNode.classList.add('loading')
			imageLoaded(img, () => {
				img.parentNode.classList.remove('loading')
				img.classList.add('loaded')
			})
		}
	}, [])

	return (
		<div className='favorite-card'>
			{show.saved && (
				<div className='saved'>
					<i className='icon ri-heart-fill'></i>
				</div>
			)}
			<div className='favorite-card__image'>
				<img src={image} alt={show.name} ref={imageRef} />
			</div>
			<div className='favorite-card__body'>
				<h3 className='favorite-title'>{show.name}</h3>
				<Button variant='secondary' className='unsave-btn' onClick={() => unSaveShow(show.id)}>
					<i className='icon ri-heart-line'></i>
					<span>Unsave</span>
				</Button>
				<Button to={`/show/${show.id}`} variant='primary' className='link-btn'>
					View More
				</Button>
			</div>
		</div>
	)
}

FavoriteCard.propTypes = {
	show: PropTypes.object.isRequired,
	unSaveShow: PropTypes.func.isRequired,
}

export default connect(null, { unSaveShow })(FavoriteCard)
