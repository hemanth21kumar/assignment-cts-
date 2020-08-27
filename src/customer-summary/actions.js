import * as actionTypes from '../common-components/actionTypes';

export const formAction = (data) => {
    return {
        type: actionTypes.SET_CUSTOMER_DETAIL, 
        payload: data 
    }
}