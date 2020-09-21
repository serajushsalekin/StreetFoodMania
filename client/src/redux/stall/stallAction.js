import { FETCH_STALL_REQUEST, FETCH_STALL_SUCCESS, FETCH_STALL, FETCH_STALL_FAILURE} from './stallTypes'
import axios from 'axios'
import {fetchStallUrl} from "../api";

export const fetchStallRequest = () => {
    return{
        type: FETCH_STALL_REQUEST
    }
}

export const fetchStallSuccess = stalls => {
    return{
        type: FETCH_STALL_SUCCESS,
        payload: stalls
    }
}

export const fetchStall = stall => {
    return{
        type: FETCH_STALL,
        payload: stall
    }
}

export const fetchStallFailure = error => {
    return{
        type: FETCH_STALL_FAILURE,
        payload: error
    }
}

export const fetchStalls = () => {
    return (dispatch) => {
        dispatch(fetchStallRequest())
        axios.get(fetchStallUrl)
            .then(res => {
                const stalls = res.data.map(stall=> stall)
                dispatch(fetchStallSuccess(stalls))
            })
            .catch(error=> dispatch(fetchStallFailure(error.message)))
    }
}
export const fetchStallDetail = id => {
    return async (dispatch) => {
        await dispatch(fetchStallRequest())
        await axios.get(`${fetchStallUrl}${id}`)
            .then( res => {
                const stall = res.data
                dispatch(fetchStall(stall))
            })
            .catch(error=> dispatch(fetchStallFailure(error.message)))
    }
}
