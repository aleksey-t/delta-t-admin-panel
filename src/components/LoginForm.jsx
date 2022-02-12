import React from "react";
import { Button, Form } from "react-bootstrap";
import "./css/login-form.css";

const LoginForm = () => {
  return (
    <Form className="form-wrapper">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder="введите адрес электронной почты"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" required placeholder="введите пароль" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
};

export default LoginForm;
