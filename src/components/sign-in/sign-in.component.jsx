import React, { useState } from "react";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { SignInContainer } from "./sign-in.styles";

function SignIn({ googleSignInStart, emailSignInStart }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePasswordChange = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          required
          handleChange={handleEmailChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handlePasswordChange}
          label="password"
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            type="button"
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => emailSignInStart({ email, password }),
});

export default connect(null, mapDispatchToProps)(SignIn);
