import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../../styles/login.scss"

interface SignUpState {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpForm: React.FC = () => {
  const [state, setState] = useState<SignUpState>({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { username, email, password } = state;

    alert(
      `You are signing up with name: ${username}, email: ${email}, and password: ${password}`
    );


    setState({
      username: "",
      email: "",
      password: "",
      repeatPassword: ""
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} className="form-signup">
        <h1 className="h1-signup">Create Account</h1>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="username"
          className="input-signup"
          value={state.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          className="input-signup"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="input-signup"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="repeat-password"
          className="input-signup"
          value={state.repeatPassword}
          onChange={handleChange}
          placeholder="Repeat password"
        />
        <button type="submit" className="button-signup">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
