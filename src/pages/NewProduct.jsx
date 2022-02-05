import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";


const NewProduct=({})=>{
    return(<>
    <h1>Добавить продукт</h1>
    <div>
    <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/">На главную</Link>
        <Link to="/login">Логин</Link>
        <Link to="/products">Продукция</Link>
        <Link to="products/:productId">Отдельный продукт</Link>
      </Nav>

        
    </div>
    {/*форма добавления товара*/}
    </>)
}

export default NewProduct