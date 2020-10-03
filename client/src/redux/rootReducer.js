import {combineReducers} from "redux"
import errorReducer from "./error/errorReducer"
import stallReducer from "./stall/stallReducer"
import authReducer from "./auth/authReducer";


const rootReducer = combineReducers({
    errors: errorReducer,
    stalls: stallReducer,
    auth: authReducer
})

export default rootReducer
