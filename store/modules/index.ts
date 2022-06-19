import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import calendar from './calendar';

export interface InitValue {
  current: Date;
}

export interface InitState {
  calendar: InitValue;
}

const rootReducer = (state: InitState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    calendar,
  })(state, action);
};

export default rootReducer;
