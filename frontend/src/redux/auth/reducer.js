import { FAILURE, LOGIN_SUCCESS, LOGOUT, REQUEST, SIGNUP_SUCCESS } from "./actionType";
const initialState = {
    isAUTH: false,
    isLoading: "",
    isError: false,
    token: "",
    role: ""
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST: {
            return { ...state, isLoading: true }
        }
        case FAILURE: {
            return { ...state, isError: true }

        }
        case LOGOUT: {
            return { ...state, isAUTH: false }
        }
        case LOGIN_SUCCESS: {
            return { ...state, token: payload.token, isAUTH: true, role: payload.user.role }
        }
        case SIGNUP_SUCCESS: {

        }
        default: {
            return state
        }
    }
}