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
             <Header username="dima777"/>
             <h1>Отдельный продукт</h1>
               <AddProductForm/>
           </Col>
         </Row>
       </Container>

  );
};

export default NewProduct;
