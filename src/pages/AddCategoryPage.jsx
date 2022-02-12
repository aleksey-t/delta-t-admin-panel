import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddCategoryForm from "../components/AddCategoryForm";

const AddCategoryPage = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col>
          <Header username="dima777" />
          <main>
            <h1>Добавление категории</h1>
            <AddCategoryForm />
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCategoryPage;
