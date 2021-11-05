import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import EnteringForm from './enteringForm';



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
                <EnteringForm/>
                </Col>
        </Row>
        </Container>
            );
};
}