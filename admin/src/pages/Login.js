import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

// let schema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Email should be valid")
//     .required("Email is Required"),
//   password: yup.string().required("Password is Required"),
// });
const Login = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: schema,
  //   onSubmit: (values) => {
  //     dispatch(login(values));
  //   },
  // });
  // const authState = useSelector((state) => state);

  // const { user, isError, isSuccess, isLoading, message } = authState.auth;

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate("admin");
  //   } else {
  //     navigate("");
  //   }
  // }, [user, isError, isSuccess, isLoading]);
  return (
    <div className="authentication-box">
  <div className="container">
    <div className="row log-in">
      <div className="col-lg-5 col-md-6 col-sm-12 form-login">
        <div className="card">
          <div className="card-body">
            <div className="title-3 text-start">
              <h2>Log in</h2>
            </div>
            <form autoComplete="off">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="pwd-input"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    maxLength={8}
                  />
                  <div className="input-group-apend">
                    <div className="input-group-text">
                      <i id="pwd-icon" className="far fa-eye-slash" />
                    </div>
                  </div>
                </div>
                <div className="important-note">
                  password should be a minimum of 8 characters and should
                  contains letters and numbers
                </div>
              </div>
             
              <div>
                <Link
                  to="/admin"
                  type="button"
                  className="btn btn-pill px-5 btn-gradient color-4"
                >
                  Log in
                </Link>
           
              </div>
              
              <div>
               
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="offset-xxl-1 col-lg-7 col-md-6 col-sm-12 auth-img bg-size"
       
      >
        <img
          src="../assets/images/svg/2.jpg"
          className="bg-img"
          alt=""
          style={{ display: "none" }}
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
