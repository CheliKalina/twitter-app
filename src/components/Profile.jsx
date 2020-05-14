import React from "react";
import { Button } from "react-bootstrap";
import '../App.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ""
        };
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleFormSubmit2 = this.handleFormSubmit2.bind(this);

    }

    handleChange2 = event => {
        const userName = event.target.value;
        this.setState({ userName });
    };
    handleFormSubmit2 = () => {
        let saveUser = JSON.stringify(this.state.userName);
        localStorage.setItem("userName", saveUser); 
        
    };
    
    // componentDidMount() {
    //     const userName2 = localStorage.getItem("userName");
    //     this.setState({ userName2 });
    //     console.log(userName2);
    // }

    render() {
        return (
            <div className="App">
                        <div className="profile">
                            <h2>Profile</h2>
                            <div>
                                <label>UserName</label>
                                <form className="profilForm">
                                    <input className='profileinput' type="text" onChange={this.handleChange2} required></input>
                                    <br />
                                    <Button className='profile-btn' onClick={this.handleFormSubmit2}> Register </Button>
                                </form>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Profile;
