import React, { Component } from "react";
import axios from "axios";
import "../assets/style/style.scss";
import firebase from "../firebase";
import { withRouter } from "react-router-dom";
import "../authentication/style.css"

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    if (this.props.isLoggedIn)
    {
      this.props.history.push("/anime");
    }
    if (this.props.history.location.pathname === "/login")
    {
      document.getElementsByTagName("html")[0].classList.add("login")
    }
    else
    {
      document.getElementsByTagName("html")[0].classList.remove("login")
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginUser = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div id="login-background" className="mt-3 col-6 offset-3">
        <form noValidate onSubmit={e => this.loginUser(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>
      </div>
    );
  }
}

export default withRouter(login);
