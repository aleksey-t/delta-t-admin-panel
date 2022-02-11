import React from "react";

const CategoryTreeView = () => {
  return (
    <div>
      {" "}
      <div className="edit-category">
        Нажмите на категорию, чтобы отредактировать
      </div>
      <div className="list-body">
        <ul>
          Котлы
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Газовые</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Электрические</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Твердотопливные</div>
            </a>
          </li>
        </ul>
        <ul>
          Радиаторы
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Алюминиевые</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Биметаллические</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Панельные</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Чугунные</div>
            </a>
          </li>
        </ul>
        <ul>
          Водонагреватели
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Газовые проточные</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Прямого нагрева</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Косвенного нагрева</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Электрические</div>
            </a>
          </li>
        </ul>
        <ul>
          Насосы
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Циркуляционые</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Повышающие давление</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Погружные</div>
            </a>
          </li>
          <li className="link-string">
            <a href="#">
              <div className="article-link-wrap">Насосные станции</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryTreeView;
