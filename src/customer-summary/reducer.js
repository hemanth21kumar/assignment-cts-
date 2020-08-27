import * as actionTypes from '../common-components/actionTypes';

const initialState = {
    data: [],
}

const summaryReducer = (state = initialState, action)=>{ 
    switch (action.type){
        case actionTypes.SET_CUSTOMER_DETAIL:
            return { data : action.payload }
        default:
            return state
    }
}
    
export default summaryReducer;