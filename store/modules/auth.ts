import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface Auth {
  name: string;
  email: string;
  image: string;
}

const initialState: Auth = {
  name: '',
  email: '',
  image: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, action: PayloadAction<Auth>) => {
      return (state = action.payload);
    },
    authLogout: (state) => {
      return (state = initialState);
    },
  },
});

export const { authLogin, authLogout } = authSlice.actions; // 액션 생성함수
export const auth = (state: RootState) => state.auth;

export default authSlice.reducer; // 리듀서
