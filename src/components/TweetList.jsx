import React from 'react';
import CreateTweet from "./CreateTweet";
import '../App.css';

const TweetList = props => {
    return (
        <div>
            <ol>
                {props.tweets.map(el => (
                    <div className="tweetHolder">
                        <CreateTweet
                            userName={el.userName}
                            date={el.date}
                            content={el.content}
                            key={[el.date]}
                        />
                    </div>
                ))}
            </ol>
        </div>
    )
}


export default TweetList;