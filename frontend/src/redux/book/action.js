import axios from "axios"
import { DELETE_BOOK, FAILURE, GET_BOOKS, REQUEST } from "./actionType"
const URL = process.env.REACT_APP_API_URL

export const getBooks = (data) => (dispatch) => {
    dispatch({ type: REQUEST })
    return axios.get(`${URL}/books`, data)
        .then(res => {
            dispatch({ type: GET_BOOKS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILURE })
        })
}
export const getOldBooks = (data) => (dispatch) => {
    dispatch({ type: REQUEST })
    return axios.get(`${URL}/books/old`, data)
        .then(res => {
            dispatch({ type: GET_BOOKS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILURE })
        })
}
export const getNewBooks = (data) => (dispatch) => {
    dispatch({ type: REQUEST })
    return axios.get(`${URL}/books/new`, data)
        .then(res => {
            dispatch({ type: GET_BOOKS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILURE })
        })
}
export const deleteBook = (id) => (dispatch) => {
    axios.delete(`${URL}/books/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_BOOK })
            dispatch(getBooks())
        })
}