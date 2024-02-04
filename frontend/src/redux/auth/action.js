import axios from "axios"
import { FAILURE, LOGIN_SUCCESS, REQUEST } from "./actionType"

const URL = process.env.REACT_APP_API_URL
// console.log(URL)
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