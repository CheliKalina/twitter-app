import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './components/Nav.jsx'
import CreateTweet from './components/CreateTweet.jsx';
import TweetList from './components/TweetList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldPresentTweet: true
    }
  }
  render() {
    const { shouldPresentTweet } = this.state;
    return (
      <div className="App">
        <Container>
          <Menu />
          <Row >
            <CreateTweet
              onFormSubmit={(values) => { this.setState({ shouldPresentTweet: values.tweet <= 1 }) }}
            ></CreateTweet>
            <TweetList />
          </Row>
        </Container> 
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// // import charErr from './components/charErr.jsx'
// import CreateTweet from './components/CreateTweet.jsx'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Menu from './components/Nav.jsx'
// import TweetList from './components/TweetList'



// function App() {
//   return (
//     <div className="App">
//       <CreateTweet/>
//       {/* <Container>
//         <Menu />
//         <Row >
//             <CreateTweet />
//             <TweetList />
//         </Row>
//       </Container> */}
//     </div>
//   )
// }

// export default App;
