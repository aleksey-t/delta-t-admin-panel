import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Sidebar from "../components/Sidebar.jsx";

const NewProduct = ({ }) => {
  return (<>
    <h1>Добавить продукт</h1>
    <div>
      <Sidebar />
    </div>
    {/*форма добавления товара*/}
  </>)
}

export default NewProduct;