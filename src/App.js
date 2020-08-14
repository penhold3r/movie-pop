import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ShowsListPage from './pages/ShowsListPage'
import ShowDetailsPage from './pages/ShowDetailsPage'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shows' component={ShowsListPage} />
				<Route path='/show/:id' component={ShowDetailsPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
