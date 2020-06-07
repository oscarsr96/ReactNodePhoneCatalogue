import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { checkingMiddleware } from "./middleware/index";

const store = createStore(rootReducer, applyMiddleware(checkingMiddleware));

export default store;
