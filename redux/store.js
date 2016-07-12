import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import logger from 'redux-logger'
// configureStore
let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = {  
	error: false, 
	errorMessage: "", 
	podcasts: [],
	currentPodcast: {}
}) {
  return finalCreateStore(rootReducer, initialState)
}
