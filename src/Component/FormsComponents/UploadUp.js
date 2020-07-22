import React, { Component } from "react";

import "./UploadUp.scss";

import { Navbar, Nav, Container } from "react-bootstrap";

// import logo from "../Assets/images/Asset 7.png";
// import Chaticon from "../Assets/images/Asset 5.png";

import logo from "../../Assets/images/link.png";
import Chaticon from "../../Assets/images/link.png";
// import dot from "../Assets/images/dot.png";

// import link from "../Assets/images/link.png";

export class UploadUp extends Component {
  render() {
    return (
      <>
        <p className="paraUpload">Setup your SmartProfile</p>
        <h3>Upload your best picture.</h3>
        <p className="h2"></p>
      </>
    );
  }
}

export default UploadUp;
