import React from "react";
import "../../../styles/login.scss";
import { SetVariablesType } from "./useSignIn";

interface InputCenterProps {
  setInputs: SetVariablesType;
}

export default function SignInForm({ setInputs }: InputCenterProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="form-container sign-in-container">
      <form 
      onSubmit={(e) => {
        e.preventDefault();
          setInputs({
            username,
            password
          });
      }}
        className="form-signup">
          <h1 className="h1-signup">Sign In</h1>
          <span>or use your account</span>
          <input
            type="text"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 mb-2"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="a-signup">
            Forgot your password?
          </a>
          <button type="submit" className="button-signup">
            Sign In
          </button>
      </form>
    </div>
  );
};

