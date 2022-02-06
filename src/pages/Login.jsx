import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import "./login.css";

const Login = ({}) => {
  return (
    <>
      <div className="login-title">
        <h1>Вход на сайт</h1>
      </div>
      <LoginForm />
      <Sidebar />
    </>
  );
};

export default Login;
