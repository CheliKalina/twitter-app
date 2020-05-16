import React, {useContext} from 'react';
//import CreateTweet from "./CreateTweet";
import '../App.css';
import TweetListContext from "../context";



const TweetList = () => {
    const context = useContext(TweetListContext);
    return (
        <div>
            <ol>
                    {context.tweets.map(el => (
                        <div className="tweetHolder">
                            <li>
                            <div id="tweetHolder">
                            <div className="elements">
                                <span> {el.userName} </span>
                                <span> {el.date} </span>
                            </div>
                            <p className="tweetText"> {el.content} </p>
                        </div>
                        </li>
                        </div>
                    ))}
            </ol>
        </div>
    )
}


export default TweetList;