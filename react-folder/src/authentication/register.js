import React, { Component } from "react";
import axios from "axios";
import firebase from "../firebase";
import { withRouter } from "react-router-dom";

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      uid: ""
    };
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/anime");
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        axios
          .post("/api/user/createuser", {
            firebaseUID: user.user.uid,
            firstName: this.state.firstName,
            lastName: this.state.lastName
          })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="mt-3 col-6 offset-3">
        <form noValidate onSubmit={e => this.registerUser(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="firstName"
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="lastName"
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
            />
          </div>
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

export default withRouter(register);
