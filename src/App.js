import React from 'react';
import './App.css';
import Products from './Components/products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Products />
    </div>
    
  );
}

export default App;
