const initState = {
	showsList: [],
}

const showsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_SHOWS':
			console.log('fetching...', action.payload)
			return {
				...state,
				showsList: action.payload,
			}

		default:
			return state
	}
}

export default showsReducer
