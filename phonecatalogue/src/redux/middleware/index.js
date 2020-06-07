import {ADD_PHONES, CHANGE_PHONE} from '../actions/types';


export function checkingMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff

      if (action.type === ADD_PHONES) {
        //checks
      }

      if (action.type === CHANGE_PHONE){
        //
      }
      return next(action);
    };
  };
}
