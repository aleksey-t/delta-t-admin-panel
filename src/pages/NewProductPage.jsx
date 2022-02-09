import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Row, Container, Col } from "react-bootstrap";
import Header from "../components/Header";
import AddProductForm from "../components/AddProductForm";

const NewProduct = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col>
          <Header username="dima777" />
          <main>
            <h1>Добавление товара</h1>
            <AddProductForm />
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default NewProduct;
