import React from 'react';
import './App.css';
import Menu from './components/Nav.jsx'
import TweetList from './components/TweetList.jsx';
import Button from 'react-bootstrap/Button';

class TweetApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
      tweets: [],
      username: 'ckalina'
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleNameChange(event) {
    this.setState({ tweet: event.target.value });
    event.preventDefault();

  }

  handleSubmit(event) {
    let currentDate = new Date().toString();
    let tweetItem = {
      username: this.state.username,
      date: currentDate,
      tweet: this.state.tweet,
    }
    console.log(tweetItem);
    this.state.tweets.unshift(tweetItem);
    this.setState({ tweet: this.state.tweet });
    console.log('tweet:', this.state.tweet)
    const { tweetStored } = this.state;
    localStorage.setItem('tweetStored', tweetStored);

    const json = JSON.stringify(this.state.tweets);
    localStorage.setItem("tweets", json);

  }

  componentDidMount() {
    let storage = JSON.parse(localStorage.getItem("tweets"));
    if (storage) {
      this.setState(() => ({ tweets: storage }));
    }
  }
  
  render() {
    const { tweet } = this.state;
    const disable = tweet.length > 140
    return (
      <div className='App'>
        <Menu />
        <div className="tweetBox">
          <div className="tweet">
            <form className="tweet" onSubmit={event => this.handleSubmit(event)}>
              {disable &&
                <div className='error'>
                  <span> Oops! Your tweet can't contain over 140 characters.</span>
                </div>
              }
              <textarea
                type="text"
                id="tweet-input"
                placeholder="What do you have to say..."
                // value={this.state.tweet}
                onChange={this.handleNameChange} />

              <Button disabled={disable} onClick={(e => this.handleSubmit(e.target.value))}>Tweet</Button>
            </form>
          </div>
        </div>
        <TweetList tweets={this.state.tweets}></TweetList>
      </div>
    );
  }
}

export default TweetApp;
