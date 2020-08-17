import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import imageLoaded from '../utils/image-loaded'

import Layout from '../components/Layout'
import GoBack from '../components/GoBack'
import Rating from '../components/Rating'
import Loading from '../components/Loading'

const ShowDetailsPage = ({ match, shows }) => {
	// get show id from url params
	const { id } = match.params
	// filter show from store by id
	const [filteredShow] = shows && shows.filter(({ show }) => show.id.toString() === id)
	// destructure show if object is read
	const { show } = filteredShow || {}

	// default string for when summary is not provided
	const noSummary = 'Sorry, there is no description for this show.'

	// check if show has poster, otherwise use placeholder
	const image =
		show && show.image
			? show.image.original
			: 'https://via.placeholder.com/680x1000?text=MoviePop'

	// ref to img element callbak
	const imageRef = useCallback(img => {
		img && imageLoaded(img, () => img.classList.add('loaded'))
	}, [])

	return (
		<Layout pageTitle={show ? show.name : ''}>
			<GoBack />
			{!show ? (
				<Loading />
			) : (
				<section className='show-details'>
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
}

export default connect(mapStateToProps)(ShowDetailsPage)
