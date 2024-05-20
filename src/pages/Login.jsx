import React, { useState } from "react";
import Image from "../images/photos.gif";
import Logo from "../images/logo1.gif";
import GoogleSvg from "../images/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/login.css";
import Swal from "sweetalert2";
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword } from "../firebaseConfig";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const validEmail = "sohamchakraborty365@gmail.com";
  const validPassword = "soham123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter both email and password",
      });
      return;
    }

    if (isSignup) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          Swal.fire({
            icon: "success",
            title: "Signup Successful",
            text: "Redirecting...",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            window.location.href = "https://3-d-slider-react-js.vercel.app/";
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Signup Failed",
            text: error.message,
          });
        });
    } else {
      if (email === validEmail && password === validPassword) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Redirecting...",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "https://3-d-slider-react-js.vercel.app/";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid email or password",
        });
      }
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Redirecting...",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "https://3-d-slider-react-js.vercel.app/";
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>{isSignup ? "Create Account" : "Welcome back!"}</h2>
            <p>{isSignup ? "Sign up to get started" : "Please enter your details"}</p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              {!isSignup && (
                <div className="login-center-options">
                  <div className="remember-div">
                    <input type="checkbox" id="remember-checkbox" />
                    <label htmlFor="remember-checkbox">Remember for 30 days</label>
                  </div>
                  <a href="#" className="forgot-pass-link">
                    Forgot password?
                  </a>
                </div>
              )}
              <div className="login-center-buttons">
                <button type="submit">{isSignup ? "Sign Up" : "Log In"}</button>
                <button type="button" onClick={handleGoogleSignIn}>
                  <img src={GoogleSvg} alt="" />
                  {isSignup ? "Sign up with Google" : "Log in with Google"}
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <a href="#" onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Log In" : "Sign Up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
