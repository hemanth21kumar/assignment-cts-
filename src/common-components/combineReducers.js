import { combineReducers } from 'redux';
import summaryReducer from '../customer-summary/reducer';
import reportReducer from '../reports/reducer';
export default combineReducers({
    summaryReducer,
    reportReducer
});