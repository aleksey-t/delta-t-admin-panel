import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const AddProductForm = () => {
  return (
    <Form>
      <Form.Group>
        <Col xs={1}>
          <Form.Label column>Название</Form.Label>
        </Col>
        <Col xs={6}>
          <Form.Control type="text" placeholder="Название товара" />
        </Col>
      </Form.Group>

      <Form.Group>
        <div className="horizontal-label">
          <Form.Label column>Цена:</Form.Label>
        </div>
        <Form.Control type="text" className="mb-3" placeholder="Цена товара" />
      </Form.Group>
      <Form.Group>
        <Form.Label column xs={1}>
          Бренд:
        </Form.Label>
        <Form.Select defaultValue="Choose..." className="mb-3">
          <option>Выберите</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label column xs={1}>
          Картинка:
        </Form.Label>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Form.Group>
      <Row>
        <Form.Label column xs={1}>
          Категория
        </Form.Label>
        <Form.Select defaultValue="Choose..." className="mb-3">
          <option>Выберите категорию</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </Form.Select>
        <Form.Select defaultValue="Choose..." className="mb-3">
          <option>Выберите подкатегорию</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </Form.Select>
      </Row>
      <Form.Group>
        <Form.Label column xs={1}>
          Характеристики:
        </Form.Label>
        <Col>
          <Form.Select defaultValue="Choose..." className="mb-3">
            <option>Выберите</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group className="mb-13" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Публикация товара" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-4">
        Сохранить
      </Button>
    </Form>
  );
};

export default AddProductForm;
