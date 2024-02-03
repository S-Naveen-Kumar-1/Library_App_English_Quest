import { FAILURE, LOGIN_SUCCESS, REQUEST, SIGNUP_SUCCESS } from "./actionType";
const initialState = {
    isAUTH: false,
    isLoading: "",
    isError: false,
    errorMessage: "",
    token: ""
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST: {

        }
        case FAILURE: {

        }
        case LOGIN_SUCCESS: {

        }
        case SIGNUP_SUCCESS: {

        }
        default: {
            return state
        }
    }
}