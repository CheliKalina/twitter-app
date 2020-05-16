import React from 'react';
import '../App.css';
import TweetList from './TweetList.jsx';
import Button from 'react-bootstrap/Button';
import { getMessage, postMessage } from "./lib/api";
import Spinner from 'react-bootstrap/Spinner'
import TweetListContext from "../context";


class Form extends React.Component {
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

  stopLoader = () => {
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

  render() {
    const disable = this.state.tweet.length > 140
    const { loading } = this.state;
    return (
      <div className='App'>
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
          <TweetListContext.Provider value={{tweets: this.state.tweets}}>
            <TweetList tweets={this.state.tweets}></TweetList>
          </TweetListContext.Provider>
        </div>
      </div>
    );
  }
}

export default Form;

