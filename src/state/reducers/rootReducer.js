import rdAuth from './authReducer'
import rdProject from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  rdAuth,
  rdProject
})

export default rootReducer