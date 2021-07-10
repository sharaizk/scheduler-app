import React from "react";
import adminimage from "../Assets/adminLogin.svg";
import "./userLogin.css";
import LoginForm from "../Components/LoginForm";
import { connect } from "react-redux";
import {adminSignIn} from '../redux/actions'
const AdminLogin = ({adminSignIn}) => {

  return (
    <div className="containerr">
      <LoginForm image={adminimage} label="Admin SignIn" signIn={adminSignIn}/>
    </div>
  );
};

export default connect(null, {adminSignIn})(AdminLogin);
