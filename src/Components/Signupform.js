import React, { useState } from "react";
import InputField from "./InputField";
import "./LoginForm.css";
import DropDown from "./DropDown";
import { connect } from "react-redux";
import { signUp } from "../redux/actions";
const LoginForm = ({ image, label, signUp }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    role: "",
  });

  const onSubmit = () => {
   if(formValues.username === "" || formValues.password === "" || formValues.role === ""){
     alert("Please fill the form")
   }
   else{
    signUp(formValues)
   }
  };

  return (
    <div className="SignformDiv">
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
          <DropDown changeType={setFormValues} />
        </div>
        <button type="submit" className="loginBtn" onClick={onSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default connect(null, { signUp })(LoginForm);
