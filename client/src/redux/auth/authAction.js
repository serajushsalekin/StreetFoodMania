import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./authTypes"
import api from '../api'


export const login = user => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
        })

        await api.post('/users/login', user).then(res => {
            console.log("res",res);
            if(res.status === 200) {
                const { token, user} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                dispatch({ 
                    type: LOGIN_SUCCESS,
                    payload: { token, user }
                })
            }
            else {
                const { error } = res.data.error
                console.log(error);
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: { error }
                })
            }
        }).catch(err => {
            console.log(err)
            dispatch({type: LOGIN_FAILURE, payload: {err}})
        })
}
}

export const loggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({ 
                type: LOGIN_SUCCESS,
                payload: { token, user }
            })
        }
        else {
            dispatch({
                type: LOGIN_FAILURE,
                payload: { error: "Failed to Login!" }
                })
        }
    }
}

export const logout = () => {
    return async dispatch => {
        localStorage.clear()
        await dispatch({
            type: LOGOUT_REQUEST
        })
    }
}

