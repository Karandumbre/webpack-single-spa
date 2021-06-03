import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Store from 'STORE/Store';
import "./App.css";

function Dashboard() {
  return(
    <div className="container">
      <header className="jumbotron">
        <h3>WELCOME {Store.userName}</h3>
      </header>
    </div>
  );
}

const dashboardLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Dashboard
});

export const bootstrap = dashboardLifecycles.bootstrap;
export const mount = dashboardLifecycles.mount;
export const unmount = dashboardLifecycles.unmount;