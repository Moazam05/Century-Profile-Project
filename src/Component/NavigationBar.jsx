import React, { Component } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../Assets/images/Asset 7.png";
// import icon from "../Assets/images/Asset 5.png";
// import ArrowIcon from "../Assets/images/Asset 54.png";
// import DpIcon from "../Assets/images/Asset 11.png";
import "../Assets/css/style.scss";

// import SignUpPage from "./SignUpPage";
import EditCoverPhoto from "./EditCoverPhoto";
import EditFeaturedLink from "./EditFeaturedLink";
import UploadPhoto from "./UploadPhoto";

import EditAudience from "./EditAudience";
import EditPhysicalAttribute from "./EditPhysicalAttribute";

class NavigationBar extends Component {
  render() {
    return (
      <>
        {/* <UploadPhoto /> */}
        {/* <EditAudience /> */}
        {/* <EditCoverPhoto /> */}
        {/* <EditFeaturedLink /> */}
        <EditPhysicalAttribute />
        {/* <SignUpPage /> */}
        {/* <h2>hello</h2>
        <div className="navBarCustom">
          <Navbar className="bg-light-cus" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home" className="ml-4">
                <img src={logo} alt="not found" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="navbardisplay">
                <Nav className="ml-auto">
                  <Nav.Link className="page-link-cust" href="#home">
                    {this.props.linkName}
                  </Nav.Link>
                  <div className="dropdown">
                    <img src={ArrowIcon} alt="not found" />
                    <div className="dropdown-content">
                      <a href="/">Link 1</a>
                      <a href="/">Link 2</a>
                      <a href="/">Link 3</a>
                    </div>
                  </div>
                  <img className="dpIcon" src={DpIcon} alt="not found" />
                  <div className="SideBorder mx-3"></div>
                  <Nav.Link href="#home">
                    <img src={icon} alt="not found" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div> */}
      </>
    );
  }
}

export default NavigationBar;
