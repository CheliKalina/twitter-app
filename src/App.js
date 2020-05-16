import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import Form from "./components/form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function TweetApp() {
    return (
      <div className='App'>
        {/* <NavBar /> */}
        <div className='nav'>
          <div className="navbar">
            <Router>
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/Profile"> Profile </Link>
                </li>
              </ul>
              <Switch>
                <Route path="/Profile">
                  {/* <Profile onClick={this.handleProfile}></Profile> */}
                  <Profile></Profile>
                </Route>
                <Route path="/">
                  <Form />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }

export default TweetApp;

