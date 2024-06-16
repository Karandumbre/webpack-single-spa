import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { dispatchActions } from "./smart-components/actions";
import { userConstants } from "./smart-components/constants";

function Login() {
  const username = useSelector((state) => state.userName);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  function handleUserNameChange(e) {
    const { name, value } = e.target;
    dispatch(dispatchActions(userConstants.LOGIN_SET_USER_NAME, value));
  }

  function handlePasswordChange(e) {
    const { name, value } = e.target;
    dispatch(dispatchActions(userConstants.LOGIN_SET_PASSWORD, value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(dispatchActions(userConstants.LOGIN_REQUEST));
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              value={username}
              onChange={handleUserNameChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
