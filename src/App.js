import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchShows } from './redux/actions/showActions'

import RestoreScroll from './components/RestoreScroll'
import HomePage from './pages/HomePage'
import ShowsListPage from './pages/ShowsListPage'
import ShowDetailsPage from './pages/ShowDetailsPage'
import NotFoundPage from './pages/NotFoundPage'

const App = ({ fetchShows }) => {
	useEffect(() => {
		fetchShows()
	}, [fetchShows])

	return (
		<BrowserRouter>
			<RestoreScroll />

			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shows' component={ShowsListPage} />
				<Route path='/show/:id' component={ShowDetailsPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	)
}

App.propTypes = {
	fetchShows: PropTypes.func.isRequired,
}

export default connect(null, { fetchShows })(App)
