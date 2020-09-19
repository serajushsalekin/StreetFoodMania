import { FETCH_STALL_REQUEST, FETCH_STALL_SUCCESS, FETCH_STALL, FETCH_STALL_FAILURE} from './stallTypes'

const stallState = {
    loading: true,
    stalls: [],
    stall: {},
    error: '',
}

const stallReducer = (state=stallState, action) => {
    switch (action.type) {
        case FETCH_STALL_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_STALL_SUCCESS:
            return {
                ...state,
                loading: false,
                stalls: action.payload,
                stall: {},
                error: ''
            }
        case FETCH_STALL:
            return {
                ...state,
                loading: false,
                stalls: [],
                stall: action.payload,
                error: ''
            }
        case FETCH_STALL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default stallReducer