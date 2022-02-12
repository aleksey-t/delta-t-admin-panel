import React from "react";
import "./css/header.css";
import CategoryTreeView from "../components/CategoryTreeView";
import CategoryListForm from "../components/CategoryListForm";

const CategoryListPage = () => {
  return (
    <div>
      <h1>Список категорий</h1>
      <div className="wrap">
        <CategoryTreeView />
        <div className="category-list-wrapper">
          <CategoryListForm />
        </div>
      </div>
    </div>
  );
};

export default CategoryListPage;
