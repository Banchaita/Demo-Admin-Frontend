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

    
} from "../actions/types";

const initialState = {
    showaViweProfileModal:false,
    showChangePasswordModel:false,
    showAddAdminModel:false,
    showEditAdminModel:false,
    showEditModel:false,
    showaDeleteModal:false,
    showaPervilegeModal:false,
    showaPervileglisteModal:false,
    showaAdmingroupModal:false,
   


};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case VIEW_PROFILE_MODAL:
            return {
                ...state,
                showaViweProfileModal: payload,
            };
            case CHANGE_PASSWORD_MODAL:
            return {
                ...state,
                showChangePasswordModel: payload,
            };
            case  ADD_ADMIN_MODAL:
            return {
                ...state,
                showAddAdminModel: payload,
            };
            case  ADMIN_EDIT_MODAL:
            return {
                ...state,
                showEditAdminModel: payload,
            };
            case EDIT_MODAL:
                return {
                    ...state,
                    showEditModel: payload,
                };
                case  DELETE_MODAL:
            return {
                ...state,
                showaDeleteModal:payload,
            };
                case  PERVILEGE_MODAL:
            return {
                ...state,
                showaPervilegeModal:payload,
            };
                case PERVILEGE_LIST_MODAL:
            return {
                ...state,
                showaPervileglisteModal:payload,
            };
                case ADD_ADMIN_GROUP_MODAL:
            return {
                ...state,
                showaAdmingroupModal:payload,
            };
          
           
        
        default:
            return state;
    }
}