import {SIGN_IN, SIGN_OUT, SIGN_UP, CHK_TKN} from '../types'

const INITIAL_STATE = {
    isSignedIn: false,
    userData:{},
    userId: null,
    userType: null,
}

const authReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case SIGN_UP:
            return{...state}
        case SIGN_IN:
            return{...state, isSignedIn: true, userData: action.payload.userData, userId: action.payload.userData._id, userType: action.payload.userData.role}
        case SIGN_OUT:
            return{...state, isSignedIn: false, userData: {}, userId: null, userType: null}
        case CHK_TKN:
           return{...state, isSignedIn: true, userData: action.payload, userId: action.payload._id, userType: action.payload.role}
        default:
            return{...state}
    }
}
export default authReducer
/*
        const res = await server.post('/user/registered',{username, password, type})
        if(res.status === 200){
            
        }*/