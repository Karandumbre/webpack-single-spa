import { userConstants } from '../constants';

const userName = (state = '', action) => {
    switch (action.type) {
      case userConstants.LOGIN_SET_USER_NAME:
        return action.payload
      default:
        return state
    }
}

const password = (state = '', action) => {
    switch (action.type) {
      case userConstants.LOGIN_SET_PASSWORD:
        return action.payload
      default:
        return state
    }
}

export default {
    userName,
    password
}
