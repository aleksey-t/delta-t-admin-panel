import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const AddCategoryForm = () => {
  return (
    <Form>
      <Form.Group>
        <Col xs={1}>
          <Form.Label column>Категория:</Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control type="text" placeholder="Название категории" />
        </Col>
      </Form.Group>

      <Form.Group>
        <Col xs={1} className="mt-2">
          <Form.Label column>Ссылка:</Form.Label>
        </Col>
        <Col xs={3}>
          <div id="input-category">/generated-category-link</div>
          <Button variant="secondary" type="submit" className="mt-2">
            Изменить
          </Button>
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

      <Button variant="primary" type="submit" className="mt-4">
        Сохранить
      </Button>
    </Form>
  );
};

export default AddCategoryForm;
