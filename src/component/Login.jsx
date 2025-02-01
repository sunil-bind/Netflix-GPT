import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utilits/validate";

const Login = () => {
  const [isSignInForm, SetSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleForm = () => {
    SetSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const onFormSubmit = () => {
    const errorMessage = checkValidData(email.current.value,password.current.value)
    setErrorMessage(errorMessage);
  };
  return (
    <div>
      <Header />
      <img
        className="position-relative w-100 z-n1"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
        alt="background"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="d-flex flex-column gap-3 p-4 justify-content-center w-25 position-absolute top-50 start-50 translate-middle rounded shadow bg-dark bg-opacity-75"
        style={{ minHeight: "300px" }}
      >
        <p className="text-light fw-bold p-2 m-2 fs-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input type="email" placeholder="email" className="p-2 m-2 rounded" />
        )}
        <input
          ref={email}
          type="email"
          placeholder="email"
          className="p-2 m-2 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 m-2 rounded"
        />
        <p className="text-light fw-bold p-2 m-2 fs-6">
            {errorMessage}
        </p>
        <button
          onClick={onFormSubmit}
          type="button"
          className="btn btn-danger p-2 m-2"
        >
          Sign In
        </button>
        <p
          className="text-light fw-bold p-2 m-4 cursor-pointer"
          onClick={handleForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign UP"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
