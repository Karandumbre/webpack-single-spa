import { userConstants } from '../constants'
import Routing from 'HEADER/Routing'
import Store from 'STORE/Store';

export default store => next => action => {
  next(action)
  let state = store.getState()
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      Store.setIsUserLoggedin(true)
      Store.setUserName(state.userName)
      Routing.routeToHome('/home')
      break;
  }
}
