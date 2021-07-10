import {combineReducers} from 'redux'
import authReducer from './authReducer'
import sheetReducer from './sheetReducer'
import employeeReducer from './employeeReducers'
export default combineReducers ({
    auth: authReducer,
    sheet: sheetReducer,
    employee: employeeReducer
})