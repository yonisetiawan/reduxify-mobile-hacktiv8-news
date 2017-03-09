import { combineReducers } from 'redux'
import { listdatanewsReducer } from './reduxNews'

const rootReducers = combineReducers({
  datanews: listdatanewsReducer
})

export default rootReducers
