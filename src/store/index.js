import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// configureStore 需要传一个 object, 只能有1个 configureStore
// reducer 暴露给 store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// 不使用 redux-toolkit 的原始 react-redux 写法 ---------------------------------

// import { createStore } from "redux";
// export const INCREMENT = "increment";
// export const INCREASE = "increase";
// export const DECREMENT = "decrement";
// export const TOGGLE = "toggle";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === INCREASE) {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === DECREMENT) {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === TOGGLE) {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state; //别漏了返回 state
// };

// const store = createStore(counterReducer);

export default store;
