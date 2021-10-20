import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function pressReg()
 {

 }
export default class LeftPanel extends React.Component{
    render()
    {return (
        <Container>
        <Row style={{backgroundColor:'#F8F8F8'}}>
            <Col sm={3} style={{height:'100vh' }} >
                
            </Col>
            <Col sm={9}></Col>
        </Row>
       
        </Container>
            );
};
}