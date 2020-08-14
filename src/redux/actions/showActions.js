import axios from 'axios'

export const fetchShows = () => dispatch => {
	axios('http://api.tvmaze.com/search/shows?q=star%20wars')
		.then(({ data }) => dispatch({ type: 'FETCH_SHOWS', payload: data }))
		.catch(err => console.log(err))
}
