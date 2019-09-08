import { ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE, SEARCH_NAME, SEARCH_RATE } from './actiontype'
export const searchbyname = (payload) => {
    return {
        type: SEARCH_NAME,
        payload
    }
}
export const searchbyrate = (payload) => {
    return {
        type: SEARCH_RATE,
        payload
    }
}
export const addmovie = (payload) => {
    return {
        type: ADD_MOVIE,
        payload
    }
}
export const deletemovie = (payload) => {

    return {
        type: DELETE_MOVIE,
        payload
    }
}
export const upadtemovie = (payload) => {
    return {
        type: UPDATE_MOVIE,
        payload
    }
}