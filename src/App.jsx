import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import NewProduct from "./pages/NewProductPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import CategoryListPage from "./pages/CategoryListPage";
import CommonInfoPage from "./pages/CommonInfoPage";
import Dashboard from "./pages/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import BrandsPage from "./pages/BrandsPage";
import AllArticlesPage from "./pages/AllArticlesPage";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Header username="dima777" />
        </Row>

        {showSidebar ? (
          <div className="burger-nav-button">
            <Button variant="light" onClick={handleClose}>
              <FontAwesomeIcon icon={faBurger} /> Скрыть навигацию
            </Button>
          </div>
        ) : (
          <div className="burger-nav-button">
            <Button variant="light" onClick={handleShow}>
              <FontAwesomeIcon icon={faBurger} /> Показать навигацию
            </Button>
          </div>
        )}

        <Row>
          {showSidebar && (
            <Col xs={3}>
              <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            </Col>
          )}
          <Col>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="login" element={<Login />} />
              <Route path="products/:productId" element={<SingleProduct />} />
              <Route path="new-product" element={<NewProduct />} />
              <Route path="new-category" element={<AddCategoryPage />} />
              <Route path="category-list" element={<CategoryListPage />} />
              <Route path="common-information" element={<CommonInfoPage />} />
              <Route path="brands" element={<BrandsPage />} />
              <Route path="brands/all" element={<BrandsPage />} />
              <Route path="all-articles" element={<AllArticlesPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
