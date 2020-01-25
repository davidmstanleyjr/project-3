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
            Navbar
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

              <li className="nav-item"></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
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
