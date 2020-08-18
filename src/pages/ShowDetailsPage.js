import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { saveShow, unSaveShow } from '../redux/actions/showActions'

import imageLoaded from '../utils/image-loaded'

import Layout from '../components/Layout'
import GoBack from '../components/GoBack'
import Rating from '../components/Rating'
import Loading from '../components/Loading'
import Button from '../components/Button'

const ShowDetailsPage = ({ match, shows, saveShow, unSaveShow }) => {
	// get show id from url params
	const { id } = match.params
	// filter show from store by id
	const [filteredShow] = shows && shows.filter(show => show.id.toString() === id)
	// destructure show if object is read
	const show = filteredShow || null

	// default string for when summary is not provided
	const noSummary = 'Sorry, there is no description for this show.'

	// check if show has poster, otherwise use placeholder
	const image =
		show && show.image
			? show.image.original
			: 'https://via.placeholder.com/680x1000?text=MoviePop'

	// ref to img element callback
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
		<Layout pageTitle={show ? show.name : ''}>
			<GoBack />
			{!show ? (
				<Loading />
			) : (
				<section className='show-details'>
					{show.saved ? (
						<Button
							variant='secondary'
							className='fav-btn'
							onClick={() => unSaveShow(show.id)}>
							<i className='icon ri-heart-line'></i>
							<span>Unsave</span>
						</Button>
					) : (
						<Button variant='secondary' className='fav-btn' onClick={() => saveShow(show)}>
							<i className='icon ri-heart-fill'></i>
							<span>Save to favorites</span>
						</Button>
					)}
					<div className='poster'>
						<img src={image} alt={show.name} ref={imageRef} />
					</div>
					<div className='summary'>
						<h2 className='show-title'>{show.name}</h2>
						<div
							className='sumary-text'
							dangerouslySetInnerHTML={{ __html: show.summary || noSummary }}
						/>
					</div>
					<div className='show-data'>
						<p className='type'>
							<span>Type: </span>
							<span className='value'>{show.type}</span>
						</p>
						<p className='status'>
							<span>Status: </span>
							<span className='value'>{show.status}</span>
						</p>
						{show.genres && (
							<ul className='genres'>
								{show.genres.map(genre => (
									<li className='genre-tag' key={genre}>
										{genre}
									</li>
								))}
							</ul>
						)}
						{show.rating.average && (
							<div className='rating'>
								<p className='label'>Rating:</p>
								<div className='value'>
									<p>{show.rating.average}</p>
									<Rating className='stars' value={show.rating.average} />
								</div>
							</div>
						)}
					</div>
				</section>
			)}
		</Layout>
	)
}

const mapStateToProps = state => {
	return {
		shows: state.shows.showsList,
	}
}

ShowDetailsPage.propTypes = {
	shows: PropTypes.array.isRequired,
	saveShow: PropTypes.func.isRequired,
	unSaveShow: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { saveShow, unSaveShow })(ShowDetailsPage)
