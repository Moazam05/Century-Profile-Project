import React, { Component } from "react";
import "./FormSteps.scss";

import { Navbar, Nav, Container, Row } from "react-bootstrap";

import UploadBottom from "../FormsComponents/UploadBottom";
import UploadUp from "../FormsComponents/UploadUp";

import ProfileOneUp from "../FormsComponents/ProfileOneUp";
import ProfileOneBottom from "../FormsComponents/ProfileOneBottom";

import ProfileTwoUp from "../FormsComponents/ProfileTwoUp";
import ProfileTwoBottom from "../FormsComponents/ProfileTwoBottom";

import Footer from "../../Component/Footer";

import logo from "../../Assets/images/Asset 7.png";
import Chaticon from "../../Assets/images/Asset 5.png";

export class FomSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  handleChangeStep = () => {
    if (this.state.step === 1) {
      this.setState({ step: 2 });
    }
    if (this.state.step === 2) {
      this.setState({ step: 3 });
    }
  };

  render() {
    return (
      <>
        <Navbar className="bg-light-cus" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home" className="ml-4">
              <img
                src={logo}
                alt="not found"
                className="smartProfile"
                style={{ marginLeft: "80px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbardisplay">
              <Nav className="ml-auto">
                <Nav.Link href="#home">
                  <img
                    src={Chaticon}
                    alt="not found"
                    className="rightImageNav"
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          {this.state.step === 1 ? (
            <div className="d-flex flex-column">
              <ProfileOneUp />
            </div>
          ) : this.state.step === 2 ? (
            <Row>
              <ProfileTwoUp />
            </Row>
          ) : this.state.step === 3 ? (
            <Row>
              <UploadUp />
            </Row>
          ) : null}
          <div
            class="d-flex flex-row bd-highlight mb-3"
            style={{ marginLeft: "112px" }}
          >
            <div
              class={
                this.state.step === 1
                  ? "p-3 bg-info rounded-circle mx-3 "
                  : "p-3 bg-light border border-light rounded-circle mx-3"
              }
              style={{ height: "0px" }}
            ></div>
            <div
              class={
                this.state.step === 2
                  ? "p-3 bg-info rounded-circle mx-3"
                  : "p-3 bg-light border border-light rounded-circle mx-3"
              }
              style={{ height: "0px" }}
            ></div>
            <div
              class={
                this.state.step === 3
                  ? "p-3 bg-info rounded-circle mx-3 "
                  : "p-3 bg-light border border-light rounded-circle mx-3"
              }
              style={{ height: "0px" }}
            ></div>
          </div>
          {this.state.step === 1 ? (
            <>
              <ProfileOneBottom />
              <button
                className="profileOneTypeButton mt-2"
                onClick={this.handleChangeStep}
              >
                Next
              </button>
              <Footer />
            </>
          ) : this.state.step === 2 ? (
            <>
              <ProfileTwoBottom />

              <button
                className="profileTwoTypeButton mt-4"
                onClick={this.handleChangeStep}
              >
                Next
              </button>

              <br />
              <br />
              <br />
              <br />
              <br />
              <Footer />
            </>
          ) : this.state.step === 3 ? (
            <>
              <UploadBottom />
              <br />
              <br />
              <br />
              <br />
              <div className="mx-auto">
                <Footer />
              </div>
            </>
          ) : null}
          {/* <button
            className="btn-primary mt-5"
            style={{ marginLeft: "112px" }}
            onClick={this.handleChangeStep}
          >
            Next
          </button> */}
        </div>
      </>
    );
  }
}

export default FomSteps;
