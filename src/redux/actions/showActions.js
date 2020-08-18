import axios from 'axios'

export const fetchShows = () => dispatch => {
	axios('https://api.tvmaze.com/search/shows?q=star%20wars')
		.then(({ data }) => {
			// get data from localstorage or empty array
			const savedList = JSON.parse(localStorage.getItem('saved-shows')) || []

			const showsList = data.map(({ show }) => {
				// add "saved" property to show object based on localstorage data
				const saved = savedList.find(curr => curr.id === show.id)
				return { ...show, saved: saved ? true : false }
			})

			dispatch({ type: 'FETCH_SHOWS', payload: { showsList, savedList } })
		})
		.catch(err => console.log(err))
}

export const saveShow = show => dispatch => {
	// get data from localstorage or empty array
	const savedList = JSON.parse(localStorage.getItem('saved-shows')) || []

	// add show to list
	savedList.push(show)

	// update localstorage
	localStorage.setItem('saved-shows', JSON.stringify(savedList))

	dispatch({ type: 'SAVE_SHOW', payload: savedList })
}

export const unSaveShow = id => dispatch => {
	// get data from localstorage or empty array
	const savedList = JSON.parse(localStorage.getItem('saved-shows')) || []

	// filter out show based on id
	const updatedList = savedList.filter(show => show.id !== id)

	// update localstorage
	localStorage.setItem('saved-shows', JSON.stringify(updatedList))

	dispatch({ type: 'UNSAVE_SHOW', payload: updatedList })
}
