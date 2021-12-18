import React, { Component } from "react";

import { Table, Container, Row, Col, Button } from "react-bootstrap";

import axios from 'axios';

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          Name: 'Rice',
          Price: '120',
          Quantity: '2',
          Category: 'Food product'
        },
        {
          Name: 'wheat',
          Price: '120',
          Quantity: '3',
          Category: 'Food product'
        },
        {
          Name: 'Flour',
          Price: '200',
          Quantity: '2',
          Category: 'Food product'
        },
        {
          Name: 'Salt',
          Price: '10',
          Quantity: '1',
          Category: 'Food product'
        }
      ],
    };
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    const url = 'http://localhost/eCommerce/get_list.php';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ data })
     })
  }

  render() {
    return (
      <main className="list">
        <Container>
          <Row>
            <Col>
              <h2 className="form-heading">List</h2>
            </Col>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((eachProduct, index) => {
                  return (
                    <tr key={index}>
                      <td>{eachProduct.Name}</td>
                      <td>{eachProduct.Price}</td>
                      <td>{eachProduct.Quantity}</td>
                      <td>{eachProduct.Category}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      </main>
    );
  }
}

export default ListProduct;
