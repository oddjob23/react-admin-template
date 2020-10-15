import {
  FETCH_TODOS_FAIL,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REQUEST,
} from "../constants/todoConstants";
import axios from "axios";

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_TODOS_REQUEST,
    });

    const { data } = await axios.get("http://localhost:8000/api/todos/");

    dispatch({
      type: FETCH_TODOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TODOS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
