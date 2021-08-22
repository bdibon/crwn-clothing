import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignUpContainer } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";

const INITIAL_USER_CREDENTIALS = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp({ signUpStart }) {
  const [userCredentials, setUserCredentials] = useState(
    INITIAL_USER_CREDENTIALS
  );

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });
    setUserCredentials();
    setUserCredentials({ ...INITIAL_USER_CREDENTIALS });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
