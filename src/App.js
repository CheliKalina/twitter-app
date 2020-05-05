import React from 'react';
import './App.css';
import NewTweet from './components/NewTweet.jsx'
import Menu from './components/Nav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
    <Container>
  <Menu/>
  <Row >
      <Col>
  <NewTweet/>
    </Col>
  </Row>
</Container>
      
    </div>

    
  )
}

export default App;
