import axios from "axios"
import { ADD_BOOK, DELETE_BOOK, FAILURE, GET_BOOKS, REQUEST, UPDATE_BOOK } from "./actionType"
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
export const editBook = ({ editBookData, id }) => (dispatch) => {
    console.log("s", editBookData)

    axios.patch(`${URL}/books/${id}`, editBookData)
        .then((res) => {
            dispatch({ type: UPDATE_BOOK })
            dispatch(getBooks())
        })
}
export const addBook = (data) => (dispatch) => {
    axios.post(`${URL}/books`, data)
        .then((res) => {
            dispatch({ type: ADD_BOOK })
            dispatch(getBooks())
        })
}