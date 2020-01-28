import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

class navbar extends Component {
  logout = e => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            SushiRoll
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/anime">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {!this.props.user && JSON.stringify(this.props.user === "{}") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              ) : null}
            </ul>

            {this.props.isLoggedIn ? (
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  type="submit"
                  onClick={e => this.logout(e)}
                >
                  Log Out
                </button>
              </form>
            ) : (
              <form className="form-inline my-2 my-lg-0">
                <Link
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  to="/login"
                >
                  Login
                </Link>
              </form>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
