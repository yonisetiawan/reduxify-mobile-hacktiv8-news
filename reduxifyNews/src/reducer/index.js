import {combineReducers} from 'redux'
import NewsReducer from './reducer_news.js'
import PeopleReducer from './reducer_people.js'
const rootReducers = combineReducers({
  news: NewsReducer,
  peoples: PeopleReducer
})

export default rootReducers
