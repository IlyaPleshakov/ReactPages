import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import OrdersForm from './OrdersForm';

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


function MyButton(props){
    return(<div>
      <button className="button" id="left" onClick={props.onClick} style={props.style}>{props.name}  </button>
      </div>
    );
}
function pressReg()
 {

 }
 function MenuButton(){
    return(<div>
      <MyButton name="Ведомость заказов" onClick={pressReg} style={{marginTop:'60px'}}/>
      <MyButton name="Производство" onClick={pressReg}/>
      <MyButton name="Аналитика" onClick={pressReg}/>
      <MyButton name="Файлы" onClick={pressReg}/>
      <MyButton name="etc" onClick={pressReg}/>
      <MyButton name="etc" onClick={pressReg}/>
      <MyButton name="etc" onClick={pressReg}/>
      </div>
    );
  }
export default class LeftPanel extends React.Component{
    render()
    {return (
        <Container>
        <Row style={{backgroundColor:'#F8F8F8'}}>
            <Col sm={3} style={{height:'100vh' }} >
                <MenuButton/>
                
            </Col>
            <Col sm={9}>
                <OrdersForm/>
                </Col>
        </Row>
        </Container>
            );
};
}