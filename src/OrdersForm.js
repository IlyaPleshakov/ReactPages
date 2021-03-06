import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

var buttonStyle={

  backgroundColor: '#3b3e5fe8',
  border: 'none',
  color: '#ffffff',
  padding: '15px 22px',
  textAlign: 'center',
  fontSize: 'medium',
  marginTop: '10px',
  opacity: '0.6',
  transition: '0.3s',
  display: 'inline-block',
  textDecoration: 'none',
  cursor: 'pointer',
  width: '100%',
  borderRadius: '5px'
}

function OrdersForm()
{
    return (
    <div style={{marginTop:'10px'}} >
        <Form>
        <Row className="mb 3">            
        <Form.Group as={Col} controlId="">
            <Form.Label>Номер</Form.Label>
            <Form.Control/>
            <Button style={buttonStyle}>Найти</Button>
        </Form.Group>
        <Form.Group as={Col} controlId="">
            <Form.Label>Заказчик</Form.Label>
            <Form.Control/>
            <Button style={buttonStyle}>Добавить</Button>
        </Form.Group>
        <Form.Group as={Col} controlId="">
            <Form.Label>Название</Form.Label>
            <Form.Control/>
            <Button style={buttonStyle}>Удалить</Button>
        </Form.Group>
        </Row>
        </Form>
        
</div>
    );
}
export default OrdersForm