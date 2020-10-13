import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";

function parseJwt(token) {
  console.log(token);
  var base64Url;
  if (token.hasOwnProperty("access")) {
    base64Url = token.access.split(".")[1];
  } else {
    base64Url = token.split(".")[1];
  }

  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8000/api/login/",
      { username, password },
      config
    );
    const userData = parseJwt(data);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userData,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (email, username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:8000/api/register/",
      {
        email,
        username,
        password,
      },
      config
    );
    const userData = parseJwt(data.token);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    console.log(userData);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: userData,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userData,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
