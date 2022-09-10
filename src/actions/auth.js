import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    FORGOT_PASSWORD,
    VERIFY_EMAIL,
    VERIFY_OTP,
    REMOVE_EMAIL,
    REMOVE_FORGOT_PASSWORD,
    RESSET_PASSWORD,
    CHANGE_PASSWORD_MODAL,
    VIEW_PROFILE_MODAL,
    ADMINITERTOR_DATA,
    SET_ACTIVE_ADMINITORTER

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';



export const loginAction = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}administrator/login`,
        data,
    }
    let response = await apiCall(config, dispatch)
    if (response.data.status) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response
        })
    } else {
        dispatch({
            type: LOGIN_FAILED,
            payload: response
        })
    }
}

export const forgotPassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}administrator/forgot`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: FORGOT_PASSWORD,
        payload: response
    })
}
export const varifyEmail = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}administrator/validate_email`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VERIFY_EMAIL,
        payload: response
    })
}
export const verifyOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}administrator/verify_otp`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VERIFY_OTP,
        payload: response
    })
}
export const removeForgotPassword = (data) => async dispatch => {
    dispatch({
        type: REMOVE_FORGOT_PASSWORD,
        payload:data
    })
}
export const removeEmail = (data) => async dispatch => {
    dispatch({
        type: REMOVE_EMAIL,
        payload:data
    })
}

export const ressetPassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${baseUrl}administrator/reset_password`,
        data,
    }
    let response = await apiCall(config, dispatch)
    console.log(response)


    dispatch({
        type: RESSET_PASSWORD,
        payload: response
    })
}


export const changePassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/change_password`,
        data,
    }
    console.log('====',config)
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CHANGE_PASSWORD_MODAL,
        payload: false
    })

}

export const getAdminitertorData = () => async dispatch => {
    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        url: `${baseUrl}administrator/get_adminstrator_details`
    }
    let response = await apiCall(config, dispatch)
    // console.log(response)
    dispatch({
        type: ADMINITERTOR_DATA,
        payload: response.data
    })
}



export const getEditAdminitertor = (data) => async dispatch => {
    let formdata = new FormData();
    formdata.append('name',data.name)
    formdata.append('email',data.email)
    formdata.append('phone',data.phone)
    formdata.append('_id',data._id)
    formdata.append('administrator_pic',data.addimage)

    let config = {
        method: 'post',
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        url: `${baseUrl}administrator/update_administrator`,
        data:formdata

    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  VIEW_PROFILE_MODAL,
        payload: false
    })
}









export const changeLoginFailedStatus = (data) => async dispatch => {
    dispatch({
        type: LOGIN_FAILED,
        payload: data
    })
}
export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT,
        payload: ''
    })
}

export const setActiveAdminiteAction = (admin_id) => async dispatch => {
    dispatch({
        type: SET_ACTIVE_ADMINITORTER,
        payload: admin_id
    })
}

