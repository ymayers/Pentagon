import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import ProfileIDSetUp from "./components/ProfileIDSetUp";
import Ticket from "./components/Ticket";
import MyTickets from "./components/MyTickets";
import EventDetail from "./components/EventDetail";

import {
  loginUser,
  verifyUser,
  removeToken,
  registerUser,
  getAllEvents,
  updateProfileImg,
  getUserTickets
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
    this.readAllTickets()
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
    const updatedUserObj = await updateProfileImg(id, profileImgURL);
    this.setState({
      currentUser: updatedUserObj
    })
  }

  //***************************************************************
  //*******************************EVENTS**************************
  //***************************************************************

  readAllEvents = async () => {
    const events = await getAllEvents();
    this.setState({ events });
  };

  //***************************************************************
  //*******************************TICKETS**************************
  //***************************************************************

  readAllTickets = async () => {
    const tickets = await getUserTickets();
    this.setState({ tickets })
  }


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
              <SignUp {...props} handleRegister={this.handleRegister} />
            )}
          />

          <Route
            path="/login"
            render={(props) => (
              <LogIn {...props} handleLogin={this.handleLogin} />
            )}
          />

          <Route
            exact path="/events"
            render={(props) => (
              <Home {...props} events={this.state.events} />
            )}
          />

          <Route path="/home">
            <Home />
          </Route>

          <Route
            path="/profile_setup"
            render={(props) => (
              <ProfileIDSetUp {...props}
                currentUser={this.state.currentUser}
                handleProfileImgUpdate={this.handleProfileImgUpdate}
              />
            )}
          />

          <Route
            path="/mytickets"
            render={(props) => (
              <MyTickets {...props}
                currentUser={this.state.currentUser}
                allTickets={this.state.tickets}
              />
            )}
          />

          <Route
            path="/ticket/:id"
            render={(props) => (
              <Ticket {...props}
                currentUser={this.state.currentUser}
                allTickets={this.state.tickets}
              />
            )}
          />

          <Route
            exact path="/events/:id"
            render={(props) => (
              <EventDetail {...props}
                events={this.state.events}
              />
            )}
          />
        </Switch>


      </>
    );
  }
}

export default App;
