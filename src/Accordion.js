import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { render } from 'react-dom';
import OrdersForm from './OrdersForm';

function MyAccordion(){
return(
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Найти</Accordion.Header>
    <Accordion.Body>
      <OrdersForm/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Редактировать</Accordion.Header>
    <Accordion.Body>
      WORLD
    </Accordion.Body>
  </Accordion.Item>
</Accordion>)
}

export default MyAccordion