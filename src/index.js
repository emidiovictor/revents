import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(<App />, rootEl);
};
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
if (module.hot) {
  module.hot.accept("./app/layout/App", () => setTimeout(render));
}
render();