import React, { Component } from "react";
import "./styles.scss";
import {Link} from 'react-router-dom';

import {
  Button,
  Form,
  Row,
  Col,
  Container,
  FloatingLabel,
} from "react-bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: '',
      place: '',
      errors: {
        username: "",
        password: "",
        name: '',
        place: '',
      },
    };
  }
  submitForm = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const isValid = this.validateForm();
    if(isValid)
      this.props.navigate("/add-product");
  }
  validateForm = () => {
    const { username, password } = this.state;
    let useError = "";
    let passError = "";

    let isValid = true;


    if (username.length === 0) {
      useError = "Username should not be empty";
      isValid = false;
    }

    if (password.length === 0) {
      passError = "Password should not be empty";
      isValid = false;
    }

    this.setState({
      ...this.state,
      errors: {
        username: useError,
        password: passError,
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
        <Form className="register-wrapper" onSubmit={(ev) => this.submitForm(ev)}>
          <Row>
            <Col>
              <h2 className="form-heading">Register</h2>
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
                  placeholder="name"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.name}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="Username"
                  value={this.state.username}
                  onChange={(ev) => this.onInputChange(ev, "username")}
                  placeholder="Username"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.username}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="Password"
                  value={this.state.password}
                  onChange={(ev) => this.onInputChange(ev, "password")}
                  placeholder="Password"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.password}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Place"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="Place"
                  value={this.state.place}
                  onChange={(ev) => this.onInputChange(ev, "place")}
                  placeholder="Place"
                />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.place}
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
              <Link className='cancel-btn' to='/'>Cancel</Link>
              </Button>
            </Col>
          </Row>
        </Form>
      </main>
    );
  }
}

export default Register;
