import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increaseBy5: (state,action) => {
      state.count =  state.count + action.payload;
    },
  },
});

export const { increment, decrement, reset,increaseBy5 } = counterSlice.actions;
export default counterSlice.reducer;
