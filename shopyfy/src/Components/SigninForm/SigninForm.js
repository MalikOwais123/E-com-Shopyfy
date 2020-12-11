import React, { useState } from "react";
import { signin } from "./../../Redux/auth/authAction";

const SigninForm = ({ signin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var credential = {
      email,
      password,
    };
    signin(credential);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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
  signin,
};

export default connect(null, actions)(SigninForm);
