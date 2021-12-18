import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../Register/styles.scss';

import {
  Button,
  Form,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      category: "",
      errors: {
        quantity: "",
        price: "",
        name: "",
        category: "",
      },
    };
  }

  submitForm = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      alert("Product added successfully");
    }
  };

  validateForm = () => {
    const { name, price, quantity, category } = this.state;
    let nameError = "";
    let priceError = "";
    let quantError = "";
    let catError = "";

    let isValid = true;

    if (name.length === 0) {
      nameError = "Name should not be empty";
      isValid = false;
    }

    if (price.length === 0) {
      priceError = "Price should not be empty";
      isValid = false;
    }

    if (quantity.length === 0) {
      quantError = "Quantity should not be empty";
      isValid = false;
    }

    if (category.length === 0) {
      catError = "Category should not be empty";
      isValid = false;
    }

    this.setState({
      ...this.state,
      errors: {
        name: nameError,
        price: priceError,
        quantity: quantError,
        category: catError,
      },
    });
    return isValid;
  };

  onInputChange = (event, type) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [type]: value,
    });
  };
  render() {
    return (
      <main className="register-container form-container">
        <Form
          className="register-wrapper"
          onSubmit={(ev) => this.submitForm(ev)}
        >
          <Row>
            <Col>
              <h2 className="form-heading">Add Product</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(ev) => this.onInputChange(ev, "name")}
                  placeholder="Name"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.name}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Price"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={(ev) => this.onInputChange(ev, "price")}
                  placeholder="Price"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.price}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Quantity"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="Quantity"
                  value={this.state.quantity}
                  onChange={(ev) => this.onInputChange(ev, "quantity")}
                  placeholder="quantity"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.quantity}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Category"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="Category"
                  value={this.state.category}
                  onChange={(ev) => this.onInputChange(ev, "category")}
                  placeholder="Category"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.category}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={6} align='end'>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col xs={6} align='start'>
              <Button variant="secondary" type="reset">
                <Link className='cancel-btn' to='/list'>Cancel</Link>
              </Button>
            </Col>
          </Row>
        </Form>
      </main>
    );
  }
}

export default AddProduct;
