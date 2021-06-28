import React, {useState} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {useAppSelector} from "../store/hooks";
import {selectCruise} from "../store/cruiseReducer";

const Booking: React.FC = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cruise = useAppSelector(selectCruise);

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{margin: '1rem 0 2rem 0'}}>
                Забронировать круиз</Button>
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={() => {
                    console.log('form submitted');
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Забронировать круиз {cruise.cruise?.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>Пожалуйста, введите свои данные для того, чтобы мы могли с вами связаться!
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control type="name" placeholder="Имя" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control type="name" placeholder="Фамилия" />
                            </Form.Group>
                        </Col>
                    </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Адрес электронной почты</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            {/*<Form.Text className="text-muted">*/}
                            {/*    We'll never share your email with anyone else.*/}
                            {/*</Form.Text>*/}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control type="phone" placeholder="Номер телефона" />
                        </Form.Group>
                        {/*<Button variant="primary" type="submit">*/}
                        {/*    Submit*/}
                        {/*</Button>*/}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Воу-воу! Не так быстро!
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleClose}>
                        Да, давайте бронировать!
                    </Button>
                </Modal.Footer>
            </Form>
            </Modal>
        </>
    );
}

export default Booking;
