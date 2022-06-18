import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import counter from './counter';

export interface InitValue {
  value: number;
}

export interface InitState {
  counter: InitValue;
}

const rootReducer = (state: InitState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter,
  })(state, action);
};

export default rootReducer;
