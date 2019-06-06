import React, { Component } from 'react';
import './App.css';
import CoastersList from './components/coasters-list'
import CoasterDetails from './components/coaster-details'
import Navigation from './components/navigation'
import Homepage from './components/homepage'
import Signup from './components/auth/signup'
import Login from './components/auth/login'

import AuthServices from './service/auth-services';


import { Switch, Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthServices();
  }

  setTheUser = userObj => {
    this.setState({ loggedInUser: userObj })
  }


  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(err => this.setState({ loggedInUser: false }))
    }
  }



  render() {

    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <div>
          <Navigation setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/coasters" exact render={() => <CoastersList userInSession={this.state.loggedInUser} />} />
            <Route path="/coasters/:id" component={CoasterDetails} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div>
          <Navigation setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/coasters" exact render={() => <CoastersList userInSession={this.state.loggedInUser} />} />
            <Route path="/coasters/:id" component={CoasterDetails} />
            <Route path="/signup" exact render={() => <Signup setUser={this.setTheUser} />} />
            <Route path="/login" exact render={() => <Login setUser={this.setTheUser} />} />
          </Switch>
        </div>
      )
    }
  }
}

export default App;