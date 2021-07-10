import {CHK_TKN, CREATE_SHEET, GET_SHEET, SIGN_IN, SIGN_OUT, SIGN_UP, GET_USERS, EMP_SHEET} from '../types/index'
import server from '../../api/server'
import history from '../../Components/history'
import {loadState, saveState, deleteState} from '../localStorage'
import {store} from '../../index';
export const adminSignIn = (formValues)=>{
    
    return async(dispatch)=>{
        const {username, password} = formValues
        try {
            const res = await server.post('/admin/login',{username, password})
            if(res.status === 200){
                saveState(res.data.token)
                dispatch({type: SIGN_IN, payload: res.data})
                history.push('/admin/home')
            }
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const employeeSignIn = (formValues)=>{
    
    return async(dispatch)=>{
        const {username, password} = formValues
        try {
            const res = await server.post('/employee/login',{username, password})
            if(res.status === 200){
                saveState(res.data.token)
                dispatch({type: SIGN_IN, payload: res.data})
                history.push('/user/home')
            }
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const signUp = (formValues) =>{
    const {username, password, role} = formValues
    return async(dispatch)=>{
        try {
            const res = await server.post('/user/register',{username, password, role})
            if(res.status === 200){
                dispatch({type: SIGN_UP})
                alert(res.data.message)
            }

        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const checkToken = ()=>{
    return async (dispatch) =>{
        try{
            const data = loadState()
            if(data === undefined || data.isSignedIn === false){
                const ERROR = new Error("USER NOT LOGGED IN")
                throw ERROR
            }
            else{
                const res = await server.get('/token/verify', {    params: {
                    token: data
                  }})
                if(res.status === 200){
                    dispatch({type: CHK_TKN, payload:res.data})
                    if(res.data.role === "Employee"){
                        history.push('/user/home')
                    }
                    else{
                        history.push('/admin/home')
                    }
                }
            }
            }
            catch(e){

            }
    }
}

export const checkPageToken = ()=>{
    return async (dispatch) =>{
        try{
            const data = loadState()
            if(data === undefined || data.isSignedIn === false){
                const ERROR = new Error("USER NOT LOGGED IN")
                throw ERROR
            }
            else{
                const res = await server.get('/token/verify', {    params: {
                    token: data
                  }})
                if(res.status === 200){
                    dispatch({type: CHK_TKN, payload:res.data})
                }
            }
            }
            catch(e){

            }
    }
}


export const signOut= ()=>{
    return async(dispatch)=>{
        deleteState()
        dispatch({type:SIGN_OUT})
    }
}


export const createSheet = (formValue) =>{
    const time = new Date();
    const currenttime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true })
    const{description} = formValue
    const {userId} = store.getState().auth
    return async(dispatch)=>{
        try {
            const res = await server.post('/sheet/create',{userId, description, time: currenttime})
            if(res.status === 200){
                dispatch({type: CREATE_SHEET})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getSheet = () =>{
    return async(dispatch)=>{
        const {userId} = await store.getState().auth
        try {
            const res = await server.get('/sheet/get', {    params: {
                userId: userId
              }})
            if(res.status === 200){
                dispatch({type: GET_SHEET, payload: res.data})
            }
        } catch (error) {
            
        }
    }
}

export const getEmployee = () =>{
    return async(dispatch) =>{
        try {
            const res = await server.get('/employee/get')
            if(res.status === 200){
                dispatch({type: GET_USERS, payload:res.data})
            }
        } catch (error) {
            
        }
    }
}

export const getEmployeeSheet=(userId)=>{
    return async(dispatch)=>{
        try {
            const res=await server.get('/sheet/get',{params:{
                userId: userId
            }})
            if(res.status === 200){
                dispatch({type:EMP_SHEET, payload: res.data})
            }
        } catch (error) {
            dispatch({type:EMP_SHEET, payload:[]})
        }
    }
}