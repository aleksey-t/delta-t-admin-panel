import React from "react";
import {Button, Col, Form} from "react-bootstrap";

const ContactsForm = () => {
    return (
        <Form>
            <Form.Group>
                <Col>
                    <Form.Label column>Телефон:</Form.Label>
                </Col>
                <Col xs={3}>
                    <Form.Control type="text" placeholder="Введите номер" />
                </Col>
                <Col>
                    <Form.Label column>Адрес:</Form.Label>
                </Col>
                <Col xs={3}>
                    <Form.Control type="text" placeholder="Укажите адрес" />
                </Col>
                <Col>
                    <Form.Label column>Email:</Form.Label>
                </Col>
                <Col xs={3}>
                    <Form.Control type="text" placeholder="Укажите email" />
                </Col>
                <Col>
                    <Form.Label column>Whatsapp:</Form.Label>
                </Col>
                <Col xs={3}>
                    <Form.Control type="text" placeholder="id в Whatsapp" />
                </Col>
                <Col>
                    <Form.Label column>Telegram:</Form.Label>
                </Col>
                <Col xs={3}>
                    <Form.Control type="text" placeholder="id в Telegram" />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
                Сохранить
            </Button>
        </Form>
    )
}

export default ContactsForm;