import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyAccordion from './Accordion';
import OrdersTable from './OrdersTable';

var buttonStyle = {

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


function MyButton(props) {
  return (<div>
    <button className="button" id="left" onClick={props.onClick} style={props.style}>{props.name}  </button>
  </div>
  );
}

class MainPage extends React.Component{
  constructor(props) {
    super(props);
    this.orders = this.orders.bind(this);
    this.production = this.production.bind(this);
    this.state = { key: 1 };
  }
  componentDidMount() {
    this.setState({ key: 1 })
  }

  orders() {
    if (this.state.key != 1) this.setState({ key: 1 })
  }
  production() {
    if (this.state.key != 2) this.setState({ key: 2 })
  }
  statistics() {

  }
  files() {

  }

  render() {
    return (
      <Container>
        <Row style={{ backgroundColor: '#F8F8F8' }}>
          <Col sm={3} style={{ height: '100vh' }} >
            <MyButton name="Ведомость заказов" onClick={this.orders} style={{ marginTop: '60px' }} />
            <MyButton name="Производство" onClick={this.production}/>
            <MyButton name="Статистика" />
            <MyButton name="Файлы" />
            <MyButton name="etc" />
          </Col>
          <Col sm={9}>
            <div key={this.state.key}>
              {this.state.key == 1 ? <div><MyAccordion /><OrdersTable /> </div> : <div>PRODUCTION</div>
              }
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;