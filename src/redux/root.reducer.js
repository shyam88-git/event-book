
import * as alertReducer from './alert/alert.reducer';
import * as userReducer from './user/user.reducer';
import * as eventReducer from './event/event.reducer';


import { combineReducers } from 'redux';
export const rootReducer=combineReducers({
    [alertReducer.alertFeatureKey]:alertReducer.reducer,
    [userReducer.userFeatureKey]:userReducer.reducer,
    [eventReducer.eventFeatureKey]:eventReducer.reducer
});