import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/ManageVideos.scss";

class ManageVideos extends Component {
  render() {
    return (
      <div className="ManageVideos">
        <p>
          <Link to="/">Go Back To Home</Link>
        </p>
        <h1>ManageVideos Component</h1>
        <p>Password protected content management</p>
      </div>
    );
  }
}

export default ManageVideos;
