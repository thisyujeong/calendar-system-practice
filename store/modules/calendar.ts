import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import getCalendar from '../../utils/getCalendar';

type CurrentCalendar = {
  fullDate: string;
  days: number[];
  month: number;
  year: number;
};

type Calendar = {
  select: string;
  current: CurrentCalendar;
};

const today = new Date();
const initCalendar = getCalendar({ current: today });

const initialState: Calendar = {
  select: today.toString(),
  current: {
    fullDate: new Date(today).toString(),
    days: initCalendar.days,
    month: initCalendar.month,
    year: initCalendar.year,
  },
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    selectDate: (state, action: PayloadAction<string>) => {
      state.select = action.payload;
      const selectDate = new Date(action.payload).toString();
    },
  },
});

export const { selectDate } = calendarSlice.actions; // 액션 생성함수
export const currCalendar = (state: RootState) => state.calendar.current;

export default calendarSlice.reducer; // 리듀서
