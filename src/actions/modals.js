import {
    VIEW_PROFILE_MODAL,
    CHANGE_PASSWORD_MODAL,
    ADD_ADMIN_MODAL,
    ADMIN_EDIT_MODAL,
    EDIT_MODAL,
    DELETE_MODAL,
    PERVILEGE_MODAL,
    PERVILEGE_LIST_MODAL,
    ADD_ADMIN_GROUP_MODAL
    
} from './types';



export const showViewProfileModalAction = (show) => async dispatch => {
    dispatch({
        type:VIEW_PROFILE_MODAL,
        payload: show
    })
}
export const showChangePasswordModalAction = (show) => async dispatch => {
    dispatch({
        type: CHANGE_PASSWORD_MODAL,
        payload: show
    })
}
export const showAddAdminModalAction = (show) => async dispatch => {
    dispatch({
        type: ADD_ADMIN_MODAL,
        payload: show
    })
}
export const showAdminEditModal = (show) => async dispatch => {
    dispatch({
        type:  ADMIN_EDIT_MODAL,
        payload: show
    })
}

export const showEidtModalAction = (show) => async dispatch => {
    dispatch({
        type: EDIT_MODAL,
        payload: show
    })
}
export const showDeleteModalAction = (show) => async dispatch => {
    dispatch({
        type: DELETE_MODAL,
        payload: show
    })
}
export const showPervilegeModalAction = (show) => async dispatch => {
    dispatch({
        type: PERVILEGE_MODAL,
        payload: show
    })
}
export const showPervilegelistModalAction = (show) => async dispatch => {
    dispatch({
        type: PERVILEGE_LIST_MODAL,
        payload: show
    })
}
export const showAdmingroupModalAction = (show) => async dispatch => {
    dispatch({
        type: ADD_ADMIN_GROUP_MODAL,
        payload: show
    })
}

