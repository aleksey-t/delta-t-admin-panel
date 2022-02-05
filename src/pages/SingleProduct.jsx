import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SingleProduct=({})=>{
    return(
        <div>
            <h1>Отдельный продукт</h1>
        <Nav defaultActiveKey="/home" className="flex-column">
            <Link to="/">На главную</Link>
            <Link to="/login">Логин</Link>
            <Link to="/products">Продукция</Link>
            <Link to="/new-product">Добавить продукт</Link>
          </Nav>
    
            
        </div>
    
    )
}

export default SingleProduct

