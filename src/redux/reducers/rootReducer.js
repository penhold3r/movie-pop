import { combineReducers } from 'redux'
import showReducer from './showsReducer'

const rootReducer = combineReducers({
	shows: showReducer,
})

export default rootReducer
