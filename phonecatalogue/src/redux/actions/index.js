export function addPhones(payload) {
  return { type: "ADD_PHONES", payload }
};

export function changeSelectedPhone(payload) {
  return { type: "CHANGE_PHONE", payload }
};
