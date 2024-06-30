import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//每个 slice 需要个 name
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //state后面不用写action，因为这些就是被action被触发
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload 是内置设定的名称
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 创建 redux 的 action
export const counterActions = counterSlice.actions;

// 只导出 reducer那部分
export default counterSlice.reducer;
