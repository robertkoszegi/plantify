import { Component } from "react";
import "./LoginForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";

export default class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      if (!fetchResponse.ok)
        throw new Error("Fetch failed - Bad request", fetchResponse);
      let token = await fetchResponse.json();
      localStorage.setItem("token", token);
      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.props.setUserInState(userDoc);
    } catch (err) {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      // <div className="wrapper">
        // <div className="Center">
        <div className="container">
        <Card className="loginCard">
          <div className="form-container" onSubmit={this.handleSubmit}>
          
            <Form className="loginForm" autoComplete="off">
            <h1 className="plantifyTitle">Log In to Plantify</h1>
            <Form.Group>
            
              <Form.Label>Email</Form.Label>
              <Form.Control className="loginInput"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              </Form.Group>
              <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control className="loginInput"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              </Form.Group>
              <Button class="btn btn-primary" type="submit">LOG IN</Button>
            </Form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
          </Card>
          </div>
        // </div>
      // </div>
    );
  }
}


