import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types'
import { setAlert } from './alert'
import axiosInstance from '../utils/axios'


//LOAD USER
export const loadUser = () => async dispatch => {
    try {
        
        const res = await axiosInstance.get('/api/auth')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// REGISTER USER
export const register = ({ name, email, password }) => async dispatch => {
    const config={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = {
        name: name,
        email: email,
        password: password
    }

    try {
        
        const res = await axiosInstance.post('/api/users/', body, config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data 
        })
    } catch (error) {

        const errors = error.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        })
    }
}


// LOGIN USER
export const login = ({email, password}) => async dispatch => {
    const config={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = {
        email: email,
        password: password
    }

    try {
        
        const res = await axiosInstance.post('/api/auth/login', body, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data 
        })

        dispatch(loadUser())
    } catch (error) {

        const errors = error.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        })
    }
}

//LOGOUT
export const logout = () => dispatch => {
   dispatch({type: LOGOUT}) 
}