import {combineReducers} from 'redux'
import lists from './lists'
import background from './background'




const RootReducer = combineReducers({ lists, background})


export default RootReducer