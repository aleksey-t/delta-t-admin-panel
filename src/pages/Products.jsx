import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { render } from "@testing-library/react";

const Products=({})=>{
    return(<div><h1>Продукция</h1>
    <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/">На главную</Link>
        <Link to="/login">Логин</Link>
        <Link to="/new-product">Добавить продукт</Link>
        <Link to="products/:productId">Отдельный продукт</Link>
        </Nav>
    </div>)
}

export default Products