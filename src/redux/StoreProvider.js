import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

const StoreProvider = ({ children }) => <Provider store={store}>{children}</Provider>

export default StoreProvider
