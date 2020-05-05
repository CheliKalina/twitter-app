import React from 'react';
import Nav from 'react-bootstrap/Nav';

class Menu extends React.Component{
    render(){
            return(
                <div className="menu">
                <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Profile</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
            )
        }
}


export default Menu;
    
    