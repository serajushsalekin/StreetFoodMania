import {combineReducers} from "redux"
import errorReducer from "./error/errorReducer"
import stallReducer from "./stall/stallReducer"


const rootReducer = combineReducers({
    errors: errorReducer,
    stalls: stallReducer
})

export default rootReducer
