import React from 'react';
import './App.css';
import Products from './Components/products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Products />
        <Row>
     <Col md="2" lg="2">
          <Card body outline engine="primary">
          <img height="120px" width="240px" src={require("./Images/1.jpg")} />
             <CardTitle>Title</CardTitle>
              <Button type="button">Button</Button>
          </Card>
     </Col>
        </Row>

        <Row>
            {this.state.products.map((product, index) => (
            <Col key={product.id}  md="2" lg="2">
              <Card body outline engine="primary">
               <img height="120px" width="240px" src={require("./Images/" + product.img)}/>
               <CardTitle>{product.name}</CardTitle>
               <Button type="button" id={product.id} onClick=   {this.handleClick}>Button</Button>
              </Card>
            </Col>
              ))}

        </Row>
    </div>
    
  );
}

export default App;
