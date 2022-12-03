import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UseContext";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const [error,setError]=useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { createUser, signByGoogle } = useContext(AuthContext);




  const handleGoogle = () => {
    signByGoogle()
      .then((result) => {
         toast.success("User Create Successfully ");
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  const formSubmit = ({name,email,password,confirm_password,account_type}) => {

    setError('')


    const accountDetails={
      name:name,
      email: email,
      account_type: account_type
    }
    if(password !==confirm_password){
      return setError('password not match')
    }


      createUser(email, password)
        .then((result) => {
          if(result){
            fetch(
              `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/account`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(accountDetails),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                toast.success("Account successfully created");
                console.log(data);
              });
          }
         navigate(from, { replace: true });
          console.log(result.user)})


  .catch((error) => {
    setError(error.message);
    console.log(error);
  });
  };


  return (
    <section className="my-5 ">
      <div className="card-body lg:w-1/3 sm:w-1/2 m-auto bg-white rounded-lg">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 30, message: "Max length exceeded" },
                minLength: { value: 2, message: "Min length exceeded" },
              })}
            />
            {errors.name && (
              <p className="text-red-600 text-left">{errors.name?.message}</p>
            )}
          </div>
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
              <span className="label-text">Account Type</span>
            </label>
            <select
              name="account_type"
              className="input input-bordered"
              {...register("account_type", {
                required: "Account type is required",
              })}
            >
              <option disabled selected>
                select
              </option>
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
            {errors.account_type && (
              <p className="text-red-600 text-left">
                {errors.account_type?.message}
              </p>
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="confirm_password"
              {...register("confirm_password", {
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
            {errors.confirm_password && (
              <p className="text-red-600 text-left">
                {errors.confirm_password?.message}
              </p>
            )}
          </div>
          <div>
            {error && <p className="text-left text-red-600">{error}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="form-control mt-3">
          <p style={{ textAlign: "center" }}>
            Already have a Account ?{" "}
            <Link to="/login" className="link">
              Go to Login
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

export default Register;
