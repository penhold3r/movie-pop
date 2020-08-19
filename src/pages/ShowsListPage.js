import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../components/Layout'
import Search from '../components/Search'
import ShowCard from '../components/ShowCard'
import Button from '../components/Button'
import Loading from '../components/Loading'

const ShowsListPage = ({ shows }) => {
	const [searchResults, setSearchResults] = useState({ searchValue: '', results: [] })

	return (
		<Layout pageTitle='Shows'>
			<section className='shows-list'>
				<Search shows={shows} setSearchResults={setSearchResults} />

				{!shows ? (
					<Loading />
				) : (
					<>
						<div className='shows-list-header'>
							<h2 className='page-title'>
								{searchResults.results.length > 0
									? `Results for: "${searchResults.searchValue}"`
									: searchResults.results.length < 1 && searchResults.searchValue
									? `Sorry, we couldn't find anything for: "${searchResults.searchValue}"`
									: 'All the shows'}
							</h2>
							{searchResults.searchValue && (
								<Button
									variant='secondary'
									onClick={() => setSearchResults({ searchValue: '', results: [] })}>
									<i className='icon ri-delete-back-2-fill'></i>
									<span>Clear Search</span>
								</Button>
							)}
						</div>

						<div className='shows-grid'>
							{searchResults.results.length > 0
								? searchResults.results.map(({ show }) => (
										<ShowCard key={show.id} show={show} />
								  ))
								: searchResults.results.length < 1 && searchResults.searchValue
								? null
								: shows.map(({ show }) => <ShowCard key={show.id} show={show} />)}
						</div>
					</>
				)}
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
