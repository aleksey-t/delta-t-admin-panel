import "./css/sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { faStore, faPlus } from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";
import SidebarSubLink from "./SidebarSubLink";
import PropTypes from "prop-types";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <SidebarLink icon={faStore} linkText="Товары" to="/products" />
        <SidebarSubLink icon={faPlus} linkText="Добавить" to="/new-product" />
        <Link to="/products/:productId">Отдельный продукт</Link>
        <Link to="/new-category">Добавление категории</Link>
        <Link to="/category-list">Список категорий</Link>
        <Link to="/common-information">Основная информация</Link>
        <Link to="/all-articles">Все товары</Link>
      </Nav>
    </div>
  );
};

Sidebar.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
};

export default Sidebar;
