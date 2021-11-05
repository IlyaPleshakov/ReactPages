import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OrdersTable from './OrdersTable';

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

var product={
order:"",    
name:"",
price:0,
quantity:0
}




function OrdersForm()
{
    return (
    <div style={{marginTop:'60px'}} >
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
        <Form.Group as={Col} controlId="">
            <Form.Label>etc</Form.Label>
            <Form.Control/>
        </Form.Group>
        <Form.Group as={Col} controlId="">
            <Form.Label>etc</Form.Label>
            <Form.Control/>
        </Form.Group>
        <Form.Group as={Col} controlId="">
            <Form.Label>etc</Form.Label>
            <Form.Control/>
        </Form.Group>
        
        </Row>

        </Form>

        <OrdersTable />
</div>
    );
}
export default OrdersForm