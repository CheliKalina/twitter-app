import React from "react";
import '../App.css';
import TweetList from './TweetList';
import Button from 'react-bootstrap/Button';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: '',
            // tweets: []
        }
    }

    handleNameChange(event) {
        this.setState({ tweet: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`The form was submitted with ${this.state.tweet}`);
        this.props.onFormSubmit(this.state);
    }
    
    
    // handleTweet(e) {
    //     this.state.tweets.push(this.state.tweet)
    //     console.log(this.state.tweets);
    // }

    render() {
        const { tweet } = this.state;
        return (
            <div className="tweetBox">
                <div className="tweet">
                    <form className="tweet" onSubmit={event => this.handleSubmit(event)}>
                        <input
                            type="text"
                            placeholder="What do you have to say..."
                            value={tweet}
                            onChange={event => this.handleNameChange(event)} />
                        <Button onClick={e => this.handleTweet(e.target.value)}>Tweet</Button>
                        <TweetList/>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormComponent;
// import React from 'react';
// import '../App.css';
// import Button from 'react-bootstrap/Button';
// // import {render} from '@testing-library/react';
// // import handleError from './charErr'

// class CreateTweet extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             txt: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(e) {
//         //     //     const { tweet } = this.props
//         //     //     console.log(e.target.value);
//         this.setstate = {
//             [e.target.txt]: e.target.value
//         };
//     }

//     onSubmit (e)  {
//         if (this.state.txt <= 140)  {
//             console.log("less than 140")

//         }else {
//             return (
//                 <charErr/>
//             )
//         }
//     }



//     //     handleTweet(e) {
//     //         const { tweet } = this.props
//     //         if (tweet.length <= 140) {
//     //             //create tweet
//     //         } else {
//     //             // render(
//     //             return (
//     //                 <charError />
//     //             )
//     //             // )
//     //         }

//     //     }
//     render() {
//         return (
//             <div className="tweetBox">
//                 {/* <div className="tweet"> */}
//                     <form>
//                         <input type='text' placeholder='What do you have to say...' txt={'tweet'} onChange={this.handleChange} />
//                     <h1>{this.state.tweet}</h1>
//                     <Button onChange={e => this.handleChange(e.target.value)}>Tweet</Button>
//                     </form>

//                 {/* </div> */}
//             </div>
//         )
//         //         const tweets = [];
//         //         const { tweet } = this.props

//         //         return (
//         //             <div className="tweetBox">
//         //                 <div className="tweet">
//         //                     <input type="text"
//         //                         placeholder="What do you have to say..." className="tweet"
//         //                     // value={tweet: e.target.value}
//         //                     ></input>

//         //                 </div>
//         //                 <div className='btn'>
//         //                 </div>
//         //             </div>
//         //         )

//     }
// }


// export default CreateTweet;