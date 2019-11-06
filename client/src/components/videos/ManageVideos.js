import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../scss/ManageVideos.scss";
import Login from "./Login";

class ManageVideos extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  login = e => {
    e.preventDefault();
    console.log(
      `Logged in:\nusername: ${this.state.username}\npassword: ${this.state.password}`
    );
    this.setState({
      username: "",
      password: "",
      loggedIn: true
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const loginOrMyContent = !this.state.loggedIn ? (
      <Login
        username={this.state.username}
        password={this.state.password}
        login={this.login}
        handleChange={this.handleChange}
      />
    ) : (
      <div>
        <h1>ManageVideos Component</h1>
        <p>Password protected content management</p>
      </div>
    );
    return (
      <div className="ManageVideos">
        <p>
          <Link to="/">Go Back To Home</Link>
        </p>
        {loginOrMyContent}
      </div>
    );
  }
}

export default ManageVideos;
