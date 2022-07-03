import { AnyAction, CombinedState, configureStore, Reducer } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer, { InitState } from './modules';
import logger from 'redux-logger';

const store = () =>
  configureStore({
    reducer: rootReducer as Reducer<CombinedState<InitState>, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
