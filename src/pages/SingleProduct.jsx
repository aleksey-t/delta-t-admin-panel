import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header";
import { Row, Container, Col } from "react-bootstrap";

const SingleProduct = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col>
          <Header username="dima777" />
          <h1>Отдельный продукт</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
