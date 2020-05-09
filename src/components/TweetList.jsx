import React from 'react';

const TweetList = (props) => {
    return (
        <div>
            <ol>
                {props.tweets.map(element => (
                    <li key={element.date} className
                    ='tweetHolder'>
                        <div className='elements'>
                            <span>{element.username}</span>
                            <span>{element.date}</span>
                        </div>
                        <span className="tweetText">{element.tweet}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TweetList;