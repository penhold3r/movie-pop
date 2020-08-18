const initState = {
	showsList: [],
	savedList: [],
}

const showsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_SHOWS':
			return {
				showsList: action.payload.showsList,
				savedList: action.payload.savedList,
			}

		case 'SAVE_SHOW':
			return {
				showsList: updateList(state.showsList, action.payload),
				savedList: [...state.savedList, ...action.payload],
			}

		case 'UNSAVE_SHOW':
			return {
				showsList: updateList(state.showsList, action.payload),
				savedList: action.payload,
			}

		default:
			return state
	}
}

const updateList = (prevList, newList) =>
	prevList.map(show => {
		// update "saved" property to show object based on localstorage data
		const saved = newList.find(curr => curr.id === show.id)
		return { ...show, saved: saved ? true : false }
	})

export default showsReducer
