import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../store/counterSlice';

const DemoCounter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="8"><h4>An example of using React and Redux with React Bootstrap</h4></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="2"><Alert  variant='secondary'>
                        {counter}
                    </Alert></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg='2'><Button onClick={onIncrement}>INCREMENT BY 1</Button></Col>
                    <Col xs lg='2'><Button onClick={onDecrement}>DECREMENT BY 1</Button></Col>
                </Row>
            </Container>
        </div>
    );
};

export default DemoCounter;