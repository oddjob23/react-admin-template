import {
  FETCH_TODOS_FAIL,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
} from "../constants/todoConstants";

export const todoFetchReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        loading: true,
        todos: [],
      };
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODOS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
