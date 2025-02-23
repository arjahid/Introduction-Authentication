import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms=e.target.terms.checked;
    console.log(email, password,terms);
    setError("");
    setSuccess(false);
    if (!terms) {

        setError("Please accept terms and conditions");
        return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password should contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
         
         
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Sign UP now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-12"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
              <input name="terms" type="checkbox"  className="checkbox" />
                <span className="label-text ml-2">Accepct our terms and condition</span>
                
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {error && (
            <div className="text-center text-red-500">Error: {error}</div>
          )}
          {success && (
            <div className="text-center text-green-500">
              User created successfully
            </div>
          )}
          <p>already have an account please <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
