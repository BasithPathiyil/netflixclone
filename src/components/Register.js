import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateRegisterForm } from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Register = () => {
  const [errMessage, setErrMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleClickSignIn = (e) => {
    e.preventDefault();
    const errMsg = validateRegisterForm(
      name.current.value,
      email.current.value,
      password.current.value
    );
    if (errMsg) {
      setErrMessage(errMsg);
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode + ":" + errorMessage);
        // ..
      });
  };
  return (
    <div>
      <Header />

      <div>
        <img
          className="absolute h-full w-full object-cover    "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImage"
        />
      </div>
      {/* <form>
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="p-4 m-4">Sign In</button>
      </form> */}
      <div className="absolute flex-1 flex-col justify-center w-full">
        <div className="z-10 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleClickSignIn}>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    ref={name}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    ref={email}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    ref={password}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <p className="text-red-500">{errMessage}</p>
              </div>
              <div>
                <button
                  // onClick={handleClickSignIn}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already Member?{" "}
              <a
                href="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
