import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import loginIMG from "../../../images/loginImage.png";
import loginFormImage from "../../../images/lgn.svg";
import { Link } from "react-router-dom";
import Button from "../../Button";

import { login } from "../../../actions/userActions";
const LoginPage = ({ location, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setRememberMe(Boolean(e.target.value));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
    setRememberMe(false);
  };
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, location, redirect, userInfo]);
  return (
    <div className="account-page-wrapper my-5 pt-sm-5">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="overflow-hidden card">
              <div className="bg-soft-primary">
                <div className="row">
                  <div className="col-7 col">
                    <div className="text-primary p-4">
                      <h5 className="text-primary">Welcome Back!</h5>
                      <p>Sign in to continue to App</p>
                    </div>
                  </div>
                  <div className="col-5 align-self-end col">
                    <img src={loginIMG} alt="login" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="pt-0 card-body">
                <div>
                  <Link to="/">
                    <div className="avatar-box avatar-box-md profile-user-box mb-4">
                      <span className="avatar-box-title rounded-circle bg-light">
                        <img src={loginFormImage} alt="login form" />
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="p-2">
                  <form
                    noValidate
                    className="form-horizontal"
                    onSubmit={submitHandler}
                  >
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="username"
                        name="username"
                        required
                        id="username"
                        className="form-control"
                        value={username}
                        placeholder="Enter your username"
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        required
                        id="password"
                        className="form-control"
                        value={password}
                        placeholder="Enter password"
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        className="custom-control-input"
                        checked={rememberMe}
                        onChange={changeHandler}
                        value={true}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="mt-3">
                      <Button
                        text="Log in"
                        type="submit"
                        color="primary"
                        block={true}
                        loading={loading}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <Link to="/" className="text-muted">
                        <span className="mr-3">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-lock-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                            <path
                              fillRule="evenodd"
                              d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                            />
                          </svg>
                        </span>
                        Forgot your password?
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <p>
                Don't have an account? <Link to="/register">Sign up!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
