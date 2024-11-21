import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../../styles/login.scss"

interface SignUpState {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [state, setState] = useState<SignUpState>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // تابع ارسال فرم
  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { name, email, password } = state;

    alert(
      `You are signing up with name: ${name}, email: ${email}, and password: ${password}`
    );


    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} className="form-signup">
        <h1 className="h1-signup">Create Account</h1>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          className="input-signup"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
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
        <button type="submit" className="button-signup">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
