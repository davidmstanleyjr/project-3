import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./authentication/register";
import Anime from "./anime/anime";
import Login from "./authentication/login";
import firebase from "./firebase";
import Navbar from "./navigation/navbar";
import SavedAnime from "./dashboard/savedAnime";
import SavedManga from "./dashboard/savedManga";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoggedIn: false
    };
  }

  getUser = () => {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser)
      {
        this.setState({ user: authUser, isLoggedIn: true });
      } else
      {
        this.setState({ user: {}, isLoggedIn: false });
      }
    });
  };

  componentDidMount() {
    console.log(this)
    this.getUser();
  }

  render() {
    return (
      <Router backgroundImagePath="react-folder\src\assets\style\goku.jpg">
        <Navbar user={this.state.user.uid} isLoggedIn={this.state.isLoggedIn} />
        <div className="App container">
          <Route
            exact
            path="/register"
            component={() => (
              <Register
                user={this.state.user.uid}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/login"
            component={() => (
              <Login
                user={this.state.user.uid}
                isLoggedIn={this.state.isLoggedIn}


              />
            )}
          />
          <Route
            exact
            path="/anime"
            component={() => (
              <Anime
                user={this.state.user.uid}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/savedanime"
            component={() => (
              <SavedAnime
                user={this.state.user.uid}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/savedmanga"
            component={() => (
              <SavedManga
                user={this.state.user.uid}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
