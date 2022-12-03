import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UseContext";
import './Login.css'
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [loginError,setLoginError]=useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn, signByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

const formSubmit = ({email,password}) => {
  setLoginError('')
  signIn(email, password)
      .then((result) => {
         toast.success("Successfully login");
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError('login fail')
        console.log(error.message);
      });
};
  const handleGoogle = () => {
    signByGoogle()
      .then((result) => {
        console.log(result.user)
      navigate(from, { replace: true });})
      .catch((error) => console.log(error));
  };
  return (
    <section className="my-5 ">
      <div className="card-body lg:w-1/3 sm:w-1/2 m-auto bg-white rounded-lg">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="email"
              className="input input-bordered"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                  message: "Wrong Email pattern",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-left">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: "password is require",

                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "at least one letter, one number and one special character",
                },
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-left">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          {
            loginError && <p className="text-red-600 text-left ">{loginError}</p>
          }
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="form-control ">
          <p style={{ textAlign: "center" }}>
            New to Laptop-bazar ?{" "}
            <Link to="/register" className="link">
              Register Now
            </Link>
          </p>
        </div>
        <div className="form-control">
          <button
            className="btn btn-outline flex justify-evenly w-2/3 m-auto"
            onClick={handleGoogle}
          >
            <i className="fa-brands fa-google text-green-600 text-2xl"></i>{" "}
            <span className="text-lg font-bold">Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
