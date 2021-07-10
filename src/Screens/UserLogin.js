import React from "react";
import userimage from "../Assets/userLogin.svg";
import "./userLogin.css";
import LoginForm from "../Components/LoginForm";
import { connect } from "react-redux";
import {employeeSignIn} from '../redux/actions'
const UserLogin = ({employeeSignIn}) => {
  return (
    <div className="containerr">
        <LoginForm image={userimage} label="User SignIn" signIn={employeeSignIn}/>
    </div>
  );
};

export default connect(null,{employeeSignIn})(UserLogin);
