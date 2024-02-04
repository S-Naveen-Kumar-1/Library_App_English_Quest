import { FAILURE, GET_BOOKS, REQUEST } from "./actionType"

const initialState = {
    isLoading: "",
    isError: false,
    books: [],
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST: {
            return { ...state, isLoading: true }
        }
        case FAILURE: {
            return { ...state, isError: true }

        }
        case GET_BOOKS: {
            return { ...state, books: payload }
        }
        default: {
            return state
        }
    }
}