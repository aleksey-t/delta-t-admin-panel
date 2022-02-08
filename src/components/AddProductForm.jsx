import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const AddProductForm = () => {
  return (
    <div>
      <br />
      <Row>
        <Form.Label column lg={1}>
          Название:
        </Form.Label>
          <Col xs={6}>

            <Form.Control type="text" placeholder="Название товара" />
            </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={1}>
          Цена:
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="Цена товара"
          />
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={1}>
          Бренд:
        </Form.Label>
        <Form.Select defaultValue="Choose..." className="mb-3">
          <option>Выберите</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </Form.Select>
      </Row>

      <Row>
        <Form.Label column lg={1}>
          Картинка:
        </Form.Label>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Label column lg={1}>
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
        <br />
        <Row>
          <Form.Label column lg={1}>
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
        </Row>
      </Row>
      <br />
      <br />
      <Form.Group className="mb-13" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Публикация товара" />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Сохранить
      </Button>
      <br />
    </div>
  );
};

export default AddProductForm;
