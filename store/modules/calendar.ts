import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const today = new Date();

const initialState = {
  current: today,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    selectDate: (state, action: PayloadAction<string>) => {
      console.log('action', action.payload);
    },
  },
});

export const { selectDate } = calendarSlice.actions; // 액션 생성함수
export default calendarSlice.reducer; // 리듀서
