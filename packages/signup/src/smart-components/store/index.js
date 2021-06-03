import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'

import merge from 'deepmerge'
let reducers = {};
let middlewares = [];

export function configureReducers(...arrayOfReducers) {
  reducers = arrayOfReducers.reduce((curr, reducer) => {
      return merge(curr, reducer)
  }, {})
}

export function configureMiddlewares(...arrayOfMiddlewares) {
  middlewares = middlewares.concat(arrayOfMiddlewares)
}

export default function configureStore() {
  return compose(applyMiddleware.apply(this, middlewares))(createStore)(combineReducers(reducers));
}
