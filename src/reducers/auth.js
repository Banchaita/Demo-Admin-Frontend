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
    ADMINITERTOR_DATA
    



} from "../actions/types";

// const initialToken = localStorage.getItem('token') ? localStorage.getItem('token') : null
// console.log('initialToken',initialToken)


const initialState = {
    is_authenticated: false,
    token: '',
    loginMessage: null,
    forgotStatus: null,
    emailCheck: null,
    otpStatus: null,
    ressetpasswordStatus: [],
    adminitertor_data:[]
    
};


export default (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            
            localStorage.setItem('token', payload.data.data.token)
            return {
                ...state,
                is_authenticated: true,
                token: payload.token
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loginMessage: payload.data.message
            };
            case LOGOUT:
                localStorage.removeItem('tokenData')
                return {
                    ...state,
                    admin_data: {},
                    is_authenticated: false,
                    token: ''
                };
                case FORGOT_PASSWORD:
            return {
                ...state,
                forgotStatus: payload.data.status,
            };
            case REMOVE_FORGOT_PASSWORD:
                return {
                    ...state,
                    forgotStatus: null
                };
            case VERIFY_EMAIL:
            return {
                ...state,
                emailCheck: payload.data
            };
            case VERIFY_OTP:
            return {
                ...state,
                otpStatus: payload.data
            };
        case REMOVE_EMAIL:
            return {
                ...state,
                emailCheck: payload
            };
            case RESSET_PASSWORD:
            return {
                ...state,
                ressetpasswordStatus: payload.data.data
            };
            case ADMINITERTOR_DATA:
                return {
                    ...state,
                    // is_authenticated: true,
                    adminitertor_data: payload.data
                };
        
        default:
            return state;
    }
}


