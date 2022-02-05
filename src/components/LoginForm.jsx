import React from "react";
import { Button, Form } from "react-bootstrap";
import "./login-form.css";

const LoginForm = () => {
  return (
    <Form className="form-wrapper">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control type="email" placeholder="введите адрес электронной почты" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="введите пароль" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
};

export default LoginForm;
