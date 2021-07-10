import React from "react";
import userimage from "../Assets/userLogin.svg";
import "./userLogin.css";
import Signupform from "../Components/Signupform";
const UserSignUp = () => {

    return (
      <div className="containerr">
        <Signupform image={userimage} label="User Sign Up"/>
      </div>
    );
  };
  
  export default UserSignUp;