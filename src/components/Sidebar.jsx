import "./sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Col } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Col xs lg="2" className="navmenu">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/login">Логин</Link>
        <Link to="/new-product">Добавить продукт</Link>
        <Link to="/products">Продукция</Link>
        <Link to="/products/:productId">Отдельный продукт</Link>
      </Nav>
    </Col>
  );
};

export default Sidebar;
