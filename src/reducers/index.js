import { combineReducers } from 'redux';
import auth from './auth';
import modals from './modals';
import admin from './admin';
import dashboard from './dashboard';
import loader from './loader'




const appReducer = combineReducers({
        auth,
        modals,
        admin,
        dashboard,
        loader



});

const rootReducer = (state, action) => {
    return appReducer(state, action)
  }
  
  export default rootReducer;