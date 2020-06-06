export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff

      if (action.type === "ADD_PHONES") {
        //checks
      }
      return next(action);
    };
  };
}
