import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../components/Layout'
import Search from '../components/Search'
import ShowCard from '../components/ShowCard'

const ShowsListPage = ({ shows }) => {
	return (
		<Layout pageTitle='Shows'>
			<section className='shows-list'>
				<Search />

				<h2 className='page-title'>All the shows</h2>

				<div className='shows-grid'>
					{shows ? (
						shows.map(({ show }) => <ShowCard key={show.id} show={show} />)
					) : (
						<div className='loading'>Loading...</div>
					)}
				</div>
			</section>
		</Layout>
	)
}

const mapStateToProps = state => {
	return {
		shows: state.shows.showsList,
	}
}

ShowsListPage.propTypes = {
	shows: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(ShowsListPage)
