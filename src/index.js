import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import NewProduct from "./pages/NewProductPage";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCategoryPage from "./pages/AddCategoryPage";
import CategoryListPage from "./pages/CategoryListPage";
import CommonInfoPage from "./pages/CommonInfoPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="new-product" element={<NewProduct />} />
        <Route path="new-category" element={<AddCategoryPage />} />
        <Route path="category-list" element={<CategoryListPage />} />
        <Route path="common-information" element={<CommonInfoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
