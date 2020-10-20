import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import React, { Component } from 'react';

// You need to extend the functionality of `Component` to the class created.
class className extends Component {
    constructor() {
        super();

// A state can hold anything dynamically. For example here randomVar is any    variable.
        this.state = {
                products: [
                    { "name": "Item Name", "img": "1.jpg", "id": 1, "price": "Item Price", "attribute": "Item attribute" },
                    { "name": "Item Name", "img": "2.jpg", "id": 2, "price": "Item Price", "attribute": "Item attribute" },
                    { "name": "Item Name", "img": "3.jpg", "id": 3, "price": "Item Price", "attribute": "Item attribute" },
                    { "name": "Item Name", "img": "4.jpg", "id": 4, "price": "Item Price", "attribute": "Item attribute" },
                    { "name": "Item Name", "img": "5.jpg", "id": 5, "price": "Item Price", "attribute": "Item attribute" },
                        ],
                compare: {
              // The arr variable stores the id of selected components
                arr: []
                        }
                    }
        this.handleClick = this.handleClick.bind(this)
                }

                handleClick(e) {
                    // Creating a duplicate of arr variable of state
                    let temparr = this.state.compare.arr;
                    // e.target.id returns the id of the button which fired the event.
                    //This helps us in identifying the component
                    let id = temparr.indexOf(e.target.id)
                    //Checking if the component is already present in the arr variable or    not
                    if (id != -1) {
                      //If present then remove it
                        temparr.splice(id, 1)
                    }
                    else {
                      //else push the id to the temparr
                        temparr.push(e.target.id)
                    }
                    //setState function helps in changing the state. It can't be done    manually
                    this.setState({ compare: { arr: temparr } });
                }
        
// This function renders a component
    render() {
        let temparr = this.state.compare.arr
        let temp = []
        let Compare;
        for (var i = 0; i < temparr.length; i++) {
            let x = this.state.products.find(prod => prod.id == temparr[i]);
            temp.push(x)
        }

        return (
            <div>
                <Row>
                    {this.state.products.map((product, index) => (
                        <Col key={product.id}>
                            <Card body outline engine="primary">
                                <img height="120px" width="240px" src={require("../Images/" + product.img)} alt={product.name} />
                                <CardTitle>{product.name}</CardTitle>
                                <Button type="button" id={product.id} onClick={this.handleClick}>{(this.state.compare.arr.indexOf(product.id) < 0) ? "Compare" : "Remove"}</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Attribute</th>
                    </thead>
                    {temp.map((product) => (
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.attribute}</td>
                            </tr>

                        </tbody>

                    ))}
                </Table>

            </div >
        )
    }

    
}

export default className;