import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./Counter";
import CounterMapDispatchFn from "./CounterMapDispatchFn";
import CounterMapDispatchObj from "./CounterMapDispatchObj";

// The reducer updates the count
const initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

// The store holds the data
const store = createStore(reducer);

// The App renders everything
function App() {
  return (
    <div className="App">
      <Counter />
      <CounterMapDispatchFn />
      <CounterMapDispatchObj />
    </div>
  );
}

// The Provider passes the store through the app
// so connect() can access it
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
