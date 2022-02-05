import React from "react";
import LoginForm from "../components/LoginForm";
import {Link} from "react-router-dom";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";

const Login = ({}) => {
  return (
    <>
      <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/">На главную</Link>
        <Link to="/new-product">Добавить продукт</Link>
        <Link to="/products">Продукция</Link>
        <Link to="products/:productId">Отдельный продукт</Link>
        </Nav>
        </div>
      <h1>Вход на сайт</h1>
      <LoginForm/>
    </>
  );
};

export default Login;
