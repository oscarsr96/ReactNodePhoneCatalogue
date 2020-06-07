import {ADD_PHONES, CHANGE_PHONE} from './types';

//two actions, one updates the list of phones, the other the selected phone

export function addPhones(payload) {
  return { type: ADD_PHONES, payload }
};

export function changeSelectedPhone(payload) {
  return { type: CHANGE_PHONE, payload }
};
