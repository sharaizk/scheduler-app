import React, { useState } from "react";
import InputField from "./InputField";
import "./LoginForm.css";
const LoginForm = ({ image, label, signIn }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const onSubmit = () =>{
      signIn(formValues)
  }

  return (
    <div className="formDiv">
      <div className="imgArea">
        <img className="img" src={image} alt="img" />
      </div>
      <div className="formArea">
        <h2 className="label">{label}</h2>
        <div>
          <InputField
            name="username"
            label="Username"
            type="text"
            value={formValues.username}
            setFormValues={setFormValues}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            value={formValues.password}
            setFormValues={setFormValues}
          />
        </div>
        <button type="submit" className="loginBtn" onClick={onSubmit}>Sign In</button>
      </div>
    </div>
  );
};

export default LoginForm;
