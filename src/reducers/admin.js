import {
    ADMIN_DATA,
    ADMIN_DETAILS,
    SET_ACTIVE_ADMIN,
    ADMIN_STATUS_UPDATE,



} from "../actions/types";

const initialState = {
    admin_data: [],
    admin_detalis: [],
    active_admin: null,
    admin_satuts:[],
    
};

export default (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case ADMIN_DATA:
            return {
                ...state,
                admin_data: payload.data
            };
        case ADMIN_DETAILS:
            return {
                ...state,
                admin_detalis: payload.data
            };
            case SET_ACTIVE_ADMIN:
            return {
                ...state,
                active_admin: payload
            }; 
            case ADMIN_STATUS_UPDATE:
            return {
                ...state,
                admin_satuts: payload.data
            };
        default:
            return state;
    }
}


