import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from '../reducers/index'
const middleware = applyMiddleware(thunk)
const store = createStore(rootReducers, compose(middleware, window.devToolsExtension ? window.devToolsExtension(): func=> func))

export default store
