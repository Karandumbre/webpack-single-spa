import React from "react"
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { useDispatch, useSelector } from 'react-redux';
import {dispatchActions} from './smart-components/actions'
import { userConstants } from './smart-components/constants';

const SignUp = () => {

  const username = useSelector(state => state.userName)
  const email = useSelector(state => state.email)
  const password = useSelector(state => state.password)
  const confirmPassword = useSelector(state => state.confirmPassword)
  const dispatch = useDispatch();

  function handleUserNameChange(e) {
    const { name, value } = e.target;
    dispatch(dispatchActions(userConstants.SIGNUP_SET_USER_NAME, value))
  }

  function handleEmailChange(e) {
    const { name, value } = e.target;
    dispatch(dispatchActions(userConstants.SIGNUP_SET_EMAIL, value))
  }

  function handlePasswordChange(e) {
    const { name, value } = e.target;
    dispatch(dispatchActions(userConstants.SIGNUP_SET_PASSWORD, value))
  }

  function handleConfirmPasswordChange(e) {
    const { name, value } = e.target;
    dispatch(dispatchActions(userConstants.SIGNUP_SET_CONFIRM_PASSWORD, value))
  }

  function handleSubmit(e) {
      e.preventDefault();
      dispatch(dispatchActions(userConstants.SIGNUP_REQUEST))
  }

    return(
        <div className="col-md-12">
            <div className="card card-container">
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        value={username}
                        onChange={handleUserNameChange}
                        className='form-control' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className='form-control'
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input 
                      type="password" 
                      name="password" 
                      value={password}
                      onChange={handlePasswordChange}
                      className='form-control' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">
                            <span>Sign Up</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// export default SignUp

const signUpLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Dashboard
});

export const bootstrap = signUpLifecycles.bootstrap;
export const mount = signUpLifecycles.mount;
export const unmount = signUpLifecycles.unmount;