import {ADD_PHONES, CHANGE_PHONE} from '../actions/types';

const initialState = {
  phones: [],
  selectedPhone: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_PHONES) {
    return Object.assign({}, state, {
      phones: initialState.phones.concat(action.payload)
    });
  }
  if (action.type === CHANGE_PHONE) {
    return Object.assign({}, state, {
      selectedPhone: action.payload
    });
  }
  return state;
}

export default rootReducer;
