import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";

import {
  loginUser,
  verifyUser,
  removeToken,
  registerUser,
  getAllEvents,
} from "./services/api-helper";

class App extends Component {
  state = {
    currentUser: null,
    events: [],
    tickets: [],
  };

  componentDidMount() {
    this.confirmUser();
    this.readAllEvents();
  }

  //***************************************************************
  //*******************************AUTH****************************
  //***************************************************************

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  confirmUser = async () => {
    const currentUser = await verifyUser(); 
    this.setState({ currentUser });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null,
    });
    removeToken();
  };

  //***************************************************************
  //*******************************EVENTS**************************
  //***************************************************************

  readAllEvents = async () => {
    const events = await getAllEvents();
    this.setState({ events });
  };

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route
            path="/login"
            render={(props) => (
              <LogIn {...props} handleLogin={this.handleLogin} />
            )}
          />

          <Route
            path="/events"
            render={(props) => <Home {...props} events={this.state.events} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
