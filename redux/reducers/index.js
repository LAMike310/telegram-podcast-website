import { combineReducers } from 'redux'
import TransactionReducer from './TransactionReducer'
import ErrorReducer from './errorReducer'
import ErrorMessageReducer from './ErrorMessageReducer'
import transactionTextReducer from './transactionTextReducer'
import popularPodcastsReducer from './popularPodcastsReducer'
import currentPodcastReducer from './currentPodcastReducer'

const rootReducer = combineReducers({
  transaction: TransactionReducer,
  error: ErrorReducer,
  errorMessage: ErrorMessageReducer,
  blockchainText: transactionTextReducer,
  podcasts: popularPodcastsReducer,
  currentPodcast: currentPodcastReducer,
})

export default rootReducer
