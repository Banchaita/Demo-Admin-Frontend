import {
    ADD_ADMIN_MODAL,
    ADMIN_DATA,
    ADMIN_DETAILS,
    SET_ACTIVE_ADMIN,
    EDIT_MODAL,
    ADMIN_STATUS_UPDATE,
    DELETE_MODAL,
    PERVILEGE_MODAL,
    UPDATE_ADMIN_PERVILEGE

} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';


export const AddingAdmin = (data) => async dispatch => {
    let priv = [{name:data.privileged}];
    console.log(priv)
    let formdata = new FormData();
    formdata.append('name',data.name)
    formdata.append('email',data.email)
    formdata.append('phone',data.phone)
    formdata.append('password',data.password)
    formdata.append('privileged',JSON.stringify(priv))
    // formdata.append('privileged',data.privileged)
    formdata.append('administrator_pic',data.addimage)

    // console.log(formdata.append('addimage',data.addimage))
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/add_admin`,
        data: formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: ADD_ADMIN_MODAL,
        payload: false
    })
    
}

export const getAdmintData = () => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/get_all_admin_data`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:ADMIN_DATA,
        payload: response.data
    })
}

export const getAdminDetails = ( _id ) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/get_admin_by_id`,
        data:{_id}
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  ADMIN_DETAILS,
        payload: response.data
    })
}

export const EditAdminAction = (data) => async dispatch => {
    
    let formdata = new FormData();
    formdata.append('name',data.name)
    formdata.append('email',data.email)
    formdata.append('phone',data.phone)
    formdata.append('type',data.type)
    formdata.append('administrator_pic',data.addimage)
    formdata.append('_id',data.admin_id)

    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/admin_update`,
        data:formdata
    }
    let response = await apiCall(config, dispatch)
    // console.log("response------------>>>>>>",response)
    dispatch({
        type: EDIT_MODAL,
        payload: false
    })
}

export const setAdminStatusAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}admin/update_status`,
        data:data
    }
    // console.log('data++++++++++',data)
    let response = await apiCall(config, dispatch)
    // console.log("======",response)
    dispatch({
        type: ADMIN_STATUS_UPDATE,
        payload: response.data
    })
}

export const DeleteAdminAction = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/delete_admin`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: DELETE_MODAL,
        payload: false
    })
}

export const UpdateingPreviliege = (data) => async dispatch => {  
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/fulldata_update`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: ADMIN_DETAILS,
        payload: response.data
        // .status?response.data.data:null
    })
}













export const setActiveAdminAction = (admin_id) => async dispatch => {
    dispatch({
        type: SET_ACTIVE_ADMIN,
        payload: admin_id
    })
}













