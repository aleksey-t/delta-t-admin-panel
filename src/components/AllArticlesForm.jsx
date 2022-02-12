import React from "react";
import { Table } from "react-bootstrap";

const AllArticlesForm = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Категория</th>
            <th>Производитель</th>
            <th>Картинка</th>
            <th>Цена</th>
            <th>Выбрать товар</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Вино</td>
            <td>Высшая</td>
            <td>Россия</td>
            <td>загружается</td>
            <td>1000 р.</td>
            <td>ожидайте</td>
          </tr>
          <tr>
            <td>Сыр</td>
            <td>Высшая</td>
            <td>Россия</td>
            <td>загружается</td>
            <td>650 р.</td>
            <td>ожидайте</td>
          </tr>
          <tr>
            <td>Оливки</td>
            <td colSpan={1}>Высшая</td>
            <td>Греция</td>
            <td>загружается</td>
            <td>180 р.</td>
            <td>ожидайте</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default AllArticlesForm;
