import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { menuReducer } from "./reducers/menuReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  menuLinks: menuReducer,
  userLogin: userLoginReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  menuLinks: [],
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
