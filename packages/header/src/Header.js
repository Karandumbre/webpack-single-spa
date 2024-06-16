import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import LOGIN from "LOGIN/Login";
import SIGNUP from "SIGNUP/SignUp";
import DASHBOARD from "DASHBOARD/Dashboard";
import Store from "STORE/Store";
import Routing from "./Routing";

import "./App.css";

function getNav() {
  const [isUserLoggedin, setIsUserLoggedin] = useState(Store.isUserLoggedin);
  useEffect(() => {
    Store.subscribe(() => {
      setIsUserLoggedin(Store.isUserLoggedin);
    });
  }, []);
  if (isUserLoggedin) {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">
          MFA
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              onClick={() => {
                Store.setIsUserLoggedin(false);
                Routing.routeToDashboard();
              }}
              className="nav-link"
            >
              LogOut
            </Link>
          </li>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/login"} className="navbar-brand">
          MFA
        </Link>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

function Header() {
  return (
    <Router>
      <div>
        <h1>hgjhjghjgjgjgjgf</h1>
        {getNav()}
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/"]} component={LOGIN} />
            <Route exact path={["/home"]} component={DASHBOARD} />
            <Route exact path="/login" component={LOGIN} />
            <Route exact path="/register" component={SIGNUP} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// export default Header;
const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;
