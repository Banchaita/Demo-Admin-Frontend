import {
    DASHBOARD_COUNT,
} from './types';

import { apiCall } from "../api";
import { baseUrl } from '../constants/const';




export const getDashboardounntData = () => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        url: `${baseUrl}administrator/get_dash_count`
    }
    let response = await apiCall(config, dispatch)
      dispatch({
        type: DASHBOARD_COUNT,
        payload: response
    })
}




