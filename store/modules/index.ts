import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import calendar, { Calendar } from './calendar';
import auth, { Auth } from './auth';

export interface InitState {
  calendar: Calendar;
  auth: Auth;
}

const rootReducer = (state: InitState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    calendar,
    auth,
  })(state, action);
};

export default rootReducer;
