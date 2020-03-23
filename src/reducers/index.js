import { combineReducers } from 'redux'
import contentReducer from './contentReducer'
import userReducer from './userReducer'

export default combineReducers({
    content: contentReducer,
    user: userReducer
})