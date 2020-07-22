import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import AboutMe from "../Component/AboutMe";

import DpIcon from "../Assets/images/Asset 8.png";
import icon from "../Assets/images/Asset 14.png";
import Chaticon from "../Assets/images/Asset 10.png";
import Downicon from "../Assets/images/Asset 12.png";
import img from "../Assets/images/Asset 15.png";

class PortFolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }
  handleToggle = (btn) => {
    if (btn === "btn1") {
      this.setState({ isActive: true });
    }
    if (btn === "btn2") {
      this.setState({ isActive: false });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="MainDiv">
          <Container fluid className="pl-5">
            <Row>
              <Col xs={12} md={1} className="makecenter">
                <img src={DpIcon} className="smallimg" alt="not found" />
              </Col>

              <Col xs={12} md={2} className="CenturyFavourp pt-3">
                <p className="CenturyFavour">Century Favour</p>
              </Col>

              <Col xs={12} md={3} className="makecenter pt-3">
                <button
                  className={this.state.isActive ? "active" : "btn1 "}
                  onClick={() => this.handleToggle("btn1")}
                >
                  Graphic Designer
                </button>
              </Col>

              <Col xs={12} md={3} className="makecenter pt-3">
                <button
                  className={this.state.isActive ? "btn2" : "active"}
                  onClick={() => this.handleToggle("btn2")}
                >
                  UI & UX Designer
                </button>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
          <Container className="info-section">
            <div>
              <Row>
                <Col md={6} className="img-section">
                  <img src={img} className="img-fluid" alt="not found" />
                </Col>
                <Col md={6} className="text-section pl-5 mb-3">
                  <h1 className="ml-5">Century Favour</h1>
                  <span className="ml-5">Graphic Designer, Animator</span>
                  <span className="ml-5">Ux & UI Designer.</span>
                  <img
                    src={icon}
                    className="ml-5 textsectionimg"
                    alt="not found"
                  />
                  <span className="lst-span">Gwarinpa, Abuja, Nigeria</span>
                  <div className="footer-icon pt-4">
                    <img src={Chaticon} className="icon ml-5" alt="not found" />
                    <img src={Downicon} className="ml-4" alt="not found" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* <AboutMe /> */}
      </Fragment>
    );
  }
}

export default PortFolio;
