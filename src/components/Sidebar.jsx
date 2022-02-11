import "./sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Col } from "react-bootstrap";
import { faStore, faPlus } from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <Col xs lg="2" className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        {/*TODO: использовать SidebarLink для ссылок*/}
        <SidebarLink icon={faStore} linkText="Товары" to="/products" />
        <SidebarLink icon={faPlus} linkText="Добавить" to="/new-product" />

        <Link to="/products/:productId">Отдельный продукт</Link>
        <Link to="/new-category">Добавление категории</Link>
        <Link to="/category-list">Список категорий</Link>

      </Nav>
    </Col>
  );
};

export default Sidebar;
