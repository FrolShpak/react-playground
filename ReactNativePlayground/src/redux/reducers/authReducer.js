import * as types from '../actions/actionsTypes';
import * as authApi from '../../api/authApi';

const INITIAL_STATE = {isSignedIn:false, userInfo: {}};
export default function authReducer(state = INITIAL_STATE, action) {
  console.debug(`Action Type: ${action.type}`);
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      console.debug(action.userInfo);
      return {
        ...state,
        userInfo: action.userInfo
      };
    case types.SIGN_IN:
      if(state.isSignedIn)
        return state;
      else
        return {
          ...state,
          isSignedIn: true,
          userInfo: {
            name:"Frol Shpak"
          }
        }
        // return authApi
        //   .signIn(action.credentials)
        //   .then(userInfo => {
        //     console.debug('Returned userInfo: ', userInfo);
        //     return {
        //       ...state,
        //       isSignedIn:true,
        //       userInfo,
        //     };
        //   })
        //   .catch(error => {
        //     throw error;
        //   });
    default:
      return state;
  }
}
