import axios from "axios"
import { FAILURE, LOGIN_SUCCESS, REQUEST, SIGNUP_SUCCESS } from "./actionType"

const URL = process.env.REACT_APP_API_URL
export const login = (data) => (dispatch) => {
    dispatch({ type: REQUEST })
    return axios.post(`${URL}/login`, data)
        .then(res => {
            console.log(res.data)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILURE })
        })
}
export const register = (data) => (dispatch) => {
    dispatch({ type: REQUEST })
    return axios.post(`${URL}/register`, data)
        .then(res => {
            console.log(res.data)

            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILURE })
        })
}
