// import { DECREMENT, INCREASE, INCREMENT, TOGGLE } from "../store";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // 使用 useSelector 时，会自动 subscription to redux store
  const counter = useSelector((state) => state.counter.counter); //从 store 的 configureStore 里提取 state
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  // 调用 store 里对应的 action 改变 counter 的 state
  const incrementHandler = () => {
    // dispatch({ type: INCREMENT }); // 原始写法用
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: INCREASE, amount: 5 }); //放到 action 动态的变化, 原始写法用
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: DECREMENT });// 原始写法用
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: TOGGLE }); //点击显示或隐藏 DOM 元素, 原始写法用
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// // ----------------------------------------------------------

// import { Component } from "react"; // 制作 class 类组件时需要
// import {  connect } from "react-redux";

// // 如果这个组件要制作成 class 类组件的写法
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // 这里类似 useSelector
// const mapStateToProps = state=>{
//   return{
//    counter:state.counter
//   }
// }

// const mapDispatchToProps = dispatch=>{
//   return{
//    increment:()=>dispatch({type:'increment'}),
//   decrement:()=>dispatch({type:'decrement'}),

//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
