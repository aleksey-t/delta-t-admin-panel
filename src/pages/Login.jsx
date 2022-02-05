import React from "react";
import LoginForm from "../components/LoginForm";
import {Link} from "react-router-dom";

const Login = ({}) => {
  return (
    <>
        <Link to="/">На главную</Link>
      <h1>Вход на сайт</h1>
      <LoginForm />
    </>
  );
};

export default Login;
