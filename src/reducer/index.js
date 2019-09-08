import { combineReducers } from 'redux'
import { movieReducer as movie } from './movie'
export const reducer = combineReducers({
    movie
})
