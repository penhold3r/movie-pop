import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../components/Layout'
import GoBack from '../components/GoBack'

const ShowDetailsPage = ({ match, shows }) => {
	const { id } = match.params
	const [filteredShow] = shows && shows.filter(({ show }) => show.id.toString() === id)
	const { show } = filteredShow || {}

	const image =
		show && show.image
			? show.image.original
			: 'https://via.placeholder.com/680x1000?text=MoviePop'

	const stars = []
	let rating
	if (show && show.rating.average) {
		rating = (Math.round(show.rating.average * 2) / 2).toFixed(1)

		const int = Math.floor(rating)
		const isDecimal = rating % 1 !== 0

		for (let i = 1; i <= 10; i++) {
			if (i <= int) {
				stars.push(<i key={i} className='icon ri-star-fill'></i>)
			} else if (isDecimal && i === int + 1) {
				stars.push(<i key={i} className='icon ri-star-half-line'></i>)
			} else {
				stars.push(<i key={i} className='icon ri-star-line'></i>)
			}
		}
	}

	return (
		<Layout pageTitle={show ? show.name : ''}>
			<GoBack />
			{show ? (
				<section className='show-details'>
					<div className='poster'>
						<img src={image} alt='' />
					</div>
					<div className='summary'>
						<h2 className='show-title'>{show.name}</h2>
						<div className='sumary-text' dangerouslySetInnerHTML={{ __html: show.summary }} />
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
						{rating && (
							<div className='rating'>
								<p className='label'>Rating:</p>
								<p className='value'>
									<span>{rating}</span>
									<span className='stars'>{stars}</span>
								</p>
							</div>
						)}
					</div>
				</section>
			) : (
				<div className='loading'>Loading...</div>
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
