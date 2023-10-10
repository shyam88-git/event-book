import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as alertAction from "../../redux/alert/alert.action";
import { useDispatch } from "react-redux";
import * as userAction from '../../redux/user/user.action';
import { useNavigate } from "react-router-dom";
import "animate.css"; // Import Animate.css for animations
import loginImage from "../../assets/image/login-image.jpg"; // Import your login image


function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let validateEmail = (event) => {
    setUser({ ...user, email: event.target.value });
    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    !regExp.test(event.target.value)
      ? setUserError({ ...userError, email: "Enter valid emailid" })
      : setUserError({ ...userError, email: "" });
  };

  let validatePassword = (event) => {
    setUser({ ...user, password: event.target.value });

    let regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    !regExp.test(event.target.value)
      ? setUserError({
          ...userError,
          password:
            "Password must contain at least 8 characters, including uppercase, lowercase, digit, and special characters.",
        })
      : setUserError({ ...userError, password: "" });
  };

  let submitLogin = (event) => {
    event.preventDefault();
    if (user.email !== '' && user.password !== '') {
      dispatch(userAction.loginUser(user, navigate));
    } else {
      dispatch(alertAction.setAlert('Please fill in the fields', 'danger'));
    }
  };

  return (
    <React.Fragment>
      <section className="py-3 animate__animated animate__zoomIn">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card shadow d-flex flex-row">
                <div className="col-md-6 card-body bg-light p-4">
                  <h4 className="text-center mb-4" style={{ backgroundColor: "#f8f9fa", padding: "10px" }}>
                     Login
                  </h4>
                  <form onSubmit={submitLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={validateEmail}
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        style={{ fontSize: "14px", padding: "6px" }}
                      />
                      {userError.email && <div className="text-danger">{userError.email}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={validatePassword}
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        style={{ fontSize: "14px", padding: "6px" }}
                      />
                      {userError.password && <div className="text-danger">{userError.password}</div>}
                    </div>

                    <div className="d-grid">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-teal btn-block"
                      />
                    </div>

                    <small className="mt-2 d-block text-center">
                      Don't have an account?{" "}
                      <Link
                        to="/users/register"
                        className="text-teal"
                        style={{ fontSize: "14px" }}
                      >
                        Register
                      </Link>
                    </small>
                  </form>
                </div>
                <div className="col-md-6 card-footer bg-teal text-center py-4">
                  <img
                    src={loginImage}
                    alt="Login"
                    className="img-fluid rounded-circle"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Login;
