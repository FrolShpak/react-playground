import * as types from './actionsTypes';

export function signInSuccess(userInfo) {
  return { type: types.SIGN_IN_SUCCESS, userInfo };
}

export function signIn(credentials) {
  return { type: types.SIGN_IN, credentials };
}
