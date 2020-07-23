import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import ProfileIDSetUp from "./components/ProfileIDSetUp";

import {
  loginUser,
  verifyUser,
  removeToken,
  registerUser,
  updateProfileImg
} from "./services/api-helper";

class App extends Component {
  state = {
    currentUser: null,
    events: [],
    tickets: [],
  };

  componentDidMount() {
    this.confirmUser();
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
  //*******************************USER IMAGE**************************
  //***************************************************************

  handleProfileImgUpdate = async (id, profileImgURL) => {
    const changeUserImg = await updateProfileImg(id, profileImgURL);
    // const user = this.statecurrentUser.map(post => post.id === id ? updatedPost : post)
    // this.setState({current})
  }

  //***************************************************************
  //*******************************EVENTS**************************
  //***************************************************************



  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>

          <Route
            path="/signup"
            render={(props) => (
              <SignUp {...props} handleRegister={this.handleRegister} />)}
          />

          <Route
            path="/login"
            render={(props) => (
              <LogIn {...props} handleLogin={this.handleLogin} />)}
          />

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/profile">
            <ProfileIDSetUp/>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
