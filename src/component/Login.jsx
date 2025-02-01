import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, SetSignInForm] = useState(true);
  const handleForm = () => {
    SetSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="position-relative w-100 z-n1"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
        alt="background"
      />
      <form className="d-flex flex-column gap-3 p-4 justify-content-center w-25 position-absolute top-50 start-50 translate-middle rounded shadow bg-dark bg-opacity-75"
      style={{ minHeight: "300px" }}>
        <p className="text-light fw-bold p-2 m-2 fs-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input type="email" placeholder="email" className="p-2 m-2 rounded" />
        )}
        <input type="email" placeholder="email" className="p-2 m-2 rounded" />
        <input
          type="password"
          placeholder="password"
          className="p-2 m-2 rounded"
        />
        <button type="button" className="btn btn-danger p-2 m-2">
          Sign In
        </button>
        <p className="text-light fw-bold p-2 m-4 cursor-pointer" onClick={handleForm}>
          {isSignInForm?"New to Netflix? Sign UP":"Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
