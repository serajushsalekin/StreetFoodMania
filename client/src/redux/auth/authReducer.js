import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./authTypes"

const authState = {
    token: null,
    user: {
        "username": ""
    },
    authenticate: false,
    error: '',
}

const authReducer = (state=authState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                ...state,
                authenticate: false
            }
        case LOGIN_SUCCESS:
            return {
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                authenticate: false,
                error: action.payload.error
            }
        case LOGOUT_REQUEST:
            return {
                ...authState
            }
        default: return state
    }
}

export default authReducer