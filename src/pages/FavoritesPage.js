import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Layout from '../components/Layout'
import FavoriteCard from '../components/FavoriteCard'

const FavoritesPage = ({ saved }) => {
	return (
		<Layout pageTitle='Favorites'>
			<section className='favorites'>
				<h2 className='favorites__title'>Favorites</h2>
				{saved.length > 0 ? (
					<div className='favorites__list'>
						{saved.map(show => (
							<FavoriteCard key={show.id} show={show} />
						))}
					</div>
				) : (
					<div className='no-favorites'>
						<span>You still don't have favorites</span>
						<i className='icon ri-emotion-sad-fill'></i>
					</div>
				)}
			</section>
		</Layout>
	)
}

const mapStateToProps = state => {
	return {
		saved: state.shows.savedList,
	}
}

FavoritesPage.propTypes = {
	saved: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(FavoritesPage)
