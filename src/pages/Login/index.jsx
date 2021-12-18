import React, { Component } from "react";
import "./login.scss";
import { withRouter } from "../../router-hoc";

import axios from "axios";

import {
  Button,
  Form,
  Row,
  Col,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
      },
    };
  }

  submitForm = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const isValid = this.validateForm();
    if(isValid)
      this.props.navigate("/add-product");
    // const url = "http://localhost/eCommerce/login_submit.php";
    
    // axios.post(url).then((data) => {
    //   console.log(data);
    // });
    // axios({
    //   method: "post",
    //   url: "http://localhost/eCommerce/login_submit.php",
    //   data: userData,
    //   withCredentials: false,
    //   config: {},
    // }).then(function (response) {
    //   //handle success
    //   console.log(response);
    // });
  };

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
      <main className="login-container form-container">
        <Form className="login-wrapper" onSubmit={(ev) => this.submitForm(ev)}>
          <Row>
            <Col>
              <h2 className="form-heading">Login</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
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
            </Col>
            <Col md={12} xs={12}>
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                value={this.state.password}
                onChange={(ev) => this.onInputChange(ev, "password")}
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
                <Form.Control.Feedback className="error" type="invalid">
                  {this.state.errors.password}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} align={"center"}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col xs={12} align={"center"}>
              Don't have an account ? <Link to={"/register"}>Register</Link>
            </Col>
          </Row>
        </Form>
      </main>
    );
  }
}

export default withRouter(Login);
