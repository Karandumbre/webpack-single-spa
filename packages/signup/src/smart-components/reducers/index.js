import { userConstants } from '../constants';

const userName = (state = '', action) => {
    switch (action.type) {
      case userConstants.SIGNUP_SET_USER_NAME:
        return action.payload
      default:
        return state
    }
}

const email = (state = '', action) => {
  switch (action.type) {
    case userConstants.SIGNUP_SET_EMAIL:
      return action.payload
    default:
      return state
  }
}

const password = (state = '', action) => {
    switch (action.type) {
      case userConstants.SIGNUP_SET_PASSWORD:
        return action.payload
      default:
        return state
    }
}

const confirmPassword = (state = '', action) => {
  switch (action.type) {
    case userConstants.SIGNUP_SET_CONFIRM_PASSWORD:
      return action.payload
    default:
      return state
  }
}

export default {
    userName,
    email,
    password,
    confirmPassword
}
