import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../../styles/login.scss"
// تعریف نوع داده برای وضعیت (state)
interface SignInState {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const [state, setState] = useState<SignInState>({
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

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { email, password } = state;

    alert(`You are logging in with email: ${email} and password: ${password}`);

    
    setState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} className="form-signup">
        <h1 className="h1-signup">Sign In</h1>
        <span>or use your account</span>
        <input
          type="email"
          name="email"
          className="input-signup"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="input-signup"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#" className="a-signup">Forgot your password?</a>
        <button type="submit" className="button-signup">Sign In</button>
      </form> 
    </div>
  );
};

export default SignInForm;
