import {GET_SHEET, CREATE_SHEET} from '../types'

const INITIAL_STATE={
    sheetData: [],
    status: null
}

const sheetReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case CREATE_SHEET:
            return {...state}
        case GET_SHEET:
            return{...state, sheetData:action.payload}
        default:
            return {...state}
    }
}

export default sheetReducer