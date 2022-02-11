import React from "react";
import {Button, Col, Form} from "react-bootstrap";

const CommonInfoPageForm = () => {
    return (
        <div>
    <h1>Основная информация</h1>

    <Form>
        <Form.Group>
            <Col md={8}>
                <Form.Label column>Название сайта:</Form.Label>
            </Col>
            <Col xs={8}>
                <Form.Control type="text" placeholder="Укажите название сайта" />
            </Col>

            <Col md={8} className="mt-3">
                <Form.Label column>Мелкий текст на главной:</Form.Label>
            </Col>
            <Col xs={8}>
                <Form.Control type="text" placeholder="Введите текст" />
            </Col>

            <Col md={8} className="mt-3">
                <Form.Label column>Крупный текст на главной:</Form.Label>
            </Col>
            <Col xs={8}>
                <Form.Control type="text" placeholder="Введите текст" />
            </Col>
        </Form.Group>



        <Button variant="primary" type="submit" className="mt-4">
            Сохранить
        </Button>
    </Form>
        </div>
    )
}


export default CommonInfoPageForm;
