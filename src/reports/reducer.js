import * as actionTypes from '../common-components/actionTypes';

const initialState = {
    data: [],
}

const reportReducer = (state = initialState, action)=>{ console.log('reportReducer',action.payload)
    switch (action.type){
        case actionTypes.SET_REPORT_LIST:
            return { data : action.payload }
        default:
            return state
    }
}
    
export default reportReducer;