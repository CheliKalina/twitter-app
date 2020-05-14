import React from 'react';
import './App.css';
import TweetList from './components/TweetList.jsx';
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { getMessage, postMessage } from "./components/lib/api";
import Spinner from 'react-bootstrap/Spinner'

class TweetApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
      tweets: [],
      loading: false

    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ tweet: event.target.value });
    event.preventDefault();
    
  }
  
  stopLoader =  ()  =>  {
    this.setState({ loading: false });
  }
  
  handleSubmit(event) {
    let tweetItem = {
      // username: localStorage.getItem('username'),
      // date: currentDate,
      // tweet: this.state.tweet,
      content: this.state.tweet,
      userName: JSON.parse(localStorage.getItem("userName")),
      date: new Date().toISOString()
    }
    console.log(tweetItem);
    this.state.tweets.unshift(tweetItem);
    this.setState({ tweets: this.state.tweets });
    console.log('tweet:', this.state.tweet)
    postMessage(tweetItem, this.stopLoader)
    this.setState({ loading: true });

    // const { tweetStored } = this.state;
    // localStorage.setItem('tweetStored', tweetStored);
    // const json = JSON.stringify(this.state.tweets);
    // localStorage.setItem("tweets", json);
  }

  async componentDidMount() {
    let gotTweets = await getMessage();
    if (gotTweets) {
      this.setState({ tweets: gotTweets });
    }
  }

  handleProfile() {
    return (
      <div>
        <Profile />
      </div>
    )
  }


  render() {
    const disable = this.state.tweet.length > 140
    const { loading } = this.state;
    return (
      <div className='App'>
        {/* <NavBar /> */}
        <div className='nav'>
          <div className="navbar">
            <Router>
              <ul>
                <li>
                  <Link to="/home"> Home </Link>
                </li>
                <li>
                  <Link to="/profile"> Profile </Link>
                </li>
              </ul>
              <Switch>
                <Route exact path="/">
                </Route>
                <Route exact path="/home/" >
                </Route>
                <Route exact path="/profile">
                  <Profile onClick={this.handleProfile}></Profile>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>


        <div className="contain">
          <div className="tweetBox">
            <div className="tweet">
              <form className="tweet" onSubmit={event => this.handleSubmit(event)}>
                {disable &&
                  <div className='error'>
                    <span> Oops! Your tweet can't contain over 140 characters.</span>
                  </div>
                }
                <textarea
                  onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                      this.handleSubmit();
                      ev.preventDefault();
                    }
                  }}
                  type="text"
                  id="tweet-input"
                  placeholder="What do you have to say..."
                  onChange={this.handleNameChange} />
                <Button className='tweet-btn' disabled={disable} onClick={(e => this.handleSubmit(e.target.value))}>
                {loading && <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />}
                  Tweet</Button>
              </form>
            </div>
          </div>
            <TweetList tweets={this.state.tweets}></TweetList>
        </div>
      </div>
    );
  }
}

export default TweetApp;

