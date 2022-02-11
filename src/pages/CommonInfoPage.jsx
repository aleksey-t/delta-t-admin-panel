import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CommonInfoPageForm from "../components/CommonInfoPageForm";

const CommonInfoPage = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col>
          <Header username="dima777" />
          <main>
            <div className="wrap">
              <CommonInfoPageForm />
            </div>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default CommonInfoPage;
