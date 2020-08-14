import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

// create store and use thunk for async calls
const store = createStore(rootReducer, applyMiddleware(thunk))

const StoreProvider = ({ children }) => <Provider store={store}>{children}</Provider>

export default StoreProvider
