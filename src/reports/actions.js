import * as actionTypes from '../common-components/actionTypes';

export const reportData = (data) => {
    return {
        type: actionTypes.SET_REPORT_LIST, 
        payload: data 
    }
}