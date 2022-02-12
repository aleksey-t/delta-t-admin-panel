import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import "./header.css";

const CategoryListForm = () => {
  return (
    <Form className="main">
      <Form.Group>
        <Col xs={4} className="mt-4">
          <Form.Label column>Название:</Form.Label>
          <Form.Control type="text" placeholder="Электрические" />
        </Col>
        <Col xs={4} className="mt-3">
          <Form.Label column>Тип:</Form.Label>
          <Form.Check type="radio" id="choose" label="Категория" />
          <Form.Check type="radio" id="choose" label="Подкатегория" />
        </Col>
      </Form.Group>

      <Form.Group>
        <Col xs={1} className="mt-2">
          <Form.Label column>Ссылка:</Form.Label>
        </Col>
        <Col xs={6}>
          <div id="input-category">/generated-category-link</div>
          <Button variant="secondary" type="submit" className="mt-2">
            Изменить
          </Button>
          <span>Осторожно: ссылки в поисковиках поломаются</span>
        </Col>
      </Form.Group>

      <Form.Group>
        <Form.Label column xs={3} className="mt-3">
          Картинка категории:
        </Form.Label>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Form.Group>
      <Form.Group>
        <Col>
          <Form.Label column xs={2} className="mt-2">
            Уровень в списке:
          </Form.Label>
          <Button className="btn-direction _right">&#9650;</Button>
          <Button className="btn-direction">&#9660;</Button>
        </Col>
      </Form.Group>
      <Col></Col>

      <Button variant="primary" type="submit" className="mt-4">
        Сохранить
      </Button>
    </Form>
  );
};

export default CategoryListForm;
