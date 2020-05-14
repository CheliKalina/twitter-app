import React from "react";


function CreateTweet(props) {
  const userName = props.userName;
  const date = props.date;
  const content = props.content;

  return (
    <div id="tweetHolder">
      <div className="elements">
              <span> {userName} </span>
              <span> {date} </span>
      </div>
            <p className="tweetText"> {content} </p>
          
    </div>
  );
}

export default CreateTweet;