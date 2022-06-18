import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }; // 초기 상태 정의

/**
 * createSlice; 리덕스 생성을 도와줌
 * name, initialState, reducers
 * name; slice 에 대한 이름. name으로부터 유니크한 값을 자동 생성.
 * reducers; 사용될 모든 functioan. 기존의 if else / switch case를 함수로 변환
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 각 함수의 매개변수 (state, action)
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // 액션 생성함수
export default counterSlice.reducer; // 리듀서
