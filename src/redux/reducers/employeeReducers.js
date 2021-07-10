import {GET_USERS, EMP_SHEET} from '../types'
const INITIAL_STATE ={
    employeeList: [],
    employeeSheet:[],

}
const employeeReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case GET_USERS:
            return {...state, employeeList: action.payload}
        case EMP_SHEET:
            console.log('This will render')
            return {...state, employeeSheet:action.payload}
        default:
            return{...state}
    }
}

export default employeeReducer