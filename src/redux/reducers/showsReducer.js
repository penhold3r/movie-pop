const initState = {
	showsList: [
		{
			name: 'Tv Show',
			id: 123,
		},
		{
			name: 'Tv Super Show',
			id: 456,
		},
		{
			name: 'Awesome Sauce',
			id: 789,
		},
	],
}

const showsReducer = (state = initState, action) => {
	return state
}

export default showsReducer
