import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./header.css";
import CategoryTreeView from "../components/CategoryTreeView";
import CategoryListForm from "../components/CategoryListForm";


const CategoryListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col>
          <Header username="dima777" />
          <main>
            <h1>Список категорий</h1>
            <div className="wrap">
              <CategoryTreeView />
              <div className="category-list-wrapper">
                <CategoryListForm />
              </div>
            </div>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryListPage;
