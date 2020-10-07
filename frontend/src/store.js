import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { menuReducer } from "./reducers/menuReducers";

const reducer = combineReducers({
  menuLinks: menuReducer,
});

const initialState = {
  menuLinks: [],
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
