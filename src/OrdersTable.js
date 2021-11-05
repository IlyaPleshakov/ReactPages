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


  function ShowTable(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return (<MyTable/>);
    }
    return (null);
  }
function CreateTable(arr){
    var names="";
    var ids="";
    var prices="";
    for (let elem of arr) {

    }
}

const num=[1,2,3,4,5];

function Product(){
    const products = getProducts();
    var element=products[0];
    return(
        <div>
            <h1>{element.id}</h1>
            
        </div>
    );
}

function ProductList() {

  
  
  return(<div><Product/></div>);
}

function getProducts(){
    var request = new XMLHttpRequest();
    request.responseType='json';
    request.open("GET", "http://localhost:8081/MyFirstProject_war_exploded/api/get", true);
    request.onload = function() {
      if (request.readyState === 4)  { 
        console.log('response', this.response);
        return this.response;
      }
    };     
    request.send();
  }

class OrdersTable extends React.Component {
    constructor(props){
        super(props);
        this.onOffTable = this.onOffTable.bind(this);
        this.state = {isLoggedIn: true};
    }

    onOffTable(){
        this.setState({isLoggedIn: !this.state.isLoggedIn});
        alert(typeof product);
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        return (
                <div>
                <Button style={buttonStyle} onClick={getProducts}>Найти все</Button>
                <Button style={buttonStyle} onClick={this.onOffTable}>Показать</Button>
                <ShowTable isLoggedIn={isLoggedIn}/>
                <ProductList />
                </div>
            );        
    }
}

export default OrdersTable;