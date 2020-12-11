import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "./../../Redux/auth/authAction";

const SignupForm = ({ signup }) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var credential = {
      fullName,
      email,
      password,
    };
    signup(credential);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

var actions = {
  signup,
};

export default connect(null, actions)(SignupForm);
