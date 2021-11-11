import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';

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

  const product={
      "id":1,
      "order":2,
      "productName":"Something",
      "quantity":10,
      "price":10000  
    }


  function MyTable(props){

    return(<Table striped bordered hover >
    <thead>
      <tr>
        <th>#</th>
        <th>Order id</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>

      </tr>
    </tbody>
  </Table>);
  }



function ProductList(props) {
 let {data}=props;
 let i=1;
 return <Table striped bordered hover>
  <thead>
    <tr>
      <th>№</th>
      <th>UserID</th>
      <th>title</th>
      <th>Completed</th>
    </tr>
  </thead>
  <tbody>

  {data.map((item) => {
    return <tr key={item.id}>
      <td>{i++}</td>
      <td>{item.userId}</td>
      <td>{item.title}</td>
      <td>{item.completed}</td>
    </tr>
  })}
  </tbody>
  </Table>
}



class OrdersTable extends React.Component {
    constructor(props){
        super(props);
        this.load = this.load.bind(this);
        this.state = {data:[]};
    }

    componentDidMount() {
      this.load()
    }

    async load(){
      let url='https://jsonplaceholder.typicode.com/todos';
      return fetch(url).then((res) => res.json()).then((res) => {
        this.setState({ data:res})})
      }
  
    
    render(){
        return (
                <div>
                <Button style={buttonStyle} onClick={this.load}>Найти все</Button>
                <ProductList data={this.state.data} />
                </div>
            );        
    }
}

export default OrdersTable;