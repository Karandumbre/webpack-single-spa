import React, { Component } from "react";
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import reducers from "./smart-components/reducers";
import middleware from "./smart-components/middleware";
import configureStore, {
  configureMiddlewares,
  configureReducers,
} from "./smart-components/store";
import Login from "./Login";

configureMiddlewares(createLogger());
configureMiddlewares(middleware);
configureReducers(reducers);

function App() {
  const appStore = configureStore();
  return (
    <Provider store={appStore}>
      <Login />
    </Provider>
  );
}

// export default App;
const loginAppLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App
});

export const bootstrap = loginAppLifecycles.bootstrap;
export const mount = loginAppLifecycles.mount;
export const unmount = loginAppLifecycles.unmount;