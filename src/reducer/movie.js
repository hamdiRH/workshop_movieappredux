import { movies as movie } from '../helper/movies'
import { ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE, SEARCH_NAME, SEARCH_RATE } from '../actions/actiontype'
const initialstate = {
    movie,
    filterbyrate: 1,
    filterbyname: ""
}
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_MOVIE: return { ...state, movie: state.movie.concat(action.payload) }
        case DELETE_MOVIE: return { ...state, movie: state.movie.filter(el => el.id !== action.payload) }
        case UPDATE_MOVIE: return { ...state, movie: state.movie.map(el => el.id === action.payload.id ? action.payload : el) }
        case SEARCH_NAME: return { ...state, filterbyname: action.payload }
        case SEARCH_RATE: return { ...state, filterbyrate: action.payload }
        default: return state
    }
}
export default reducer