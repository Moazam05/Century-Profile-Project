import React, { Component } from "react";
import "./SingUp.scss";

import { Input } from "semantic-ui-react";
import { Navbar, Nav, Container, Form, Row, Col, Card } from "react-bootstrap";

import Footer from "../Component/Footer";
import FormSteps from "../Component/FormSteps/FomSteps";

import logo from "../Assets/images/Asset 7.png";
import Chaticon from "../Assets/images/Asset 5.png";

export class SingUp extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar className="bg-light-cus" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home" className="ml-4">
                <img src={logo} alt="not found" className="smartProfile" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="navbardisplay">
                <Nav className="ml-auto">
                  <Nav.Link className="page-link-cust" href="#home">
                    {this.props.linkName}
                  </Nav.Link>
                  <Input
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    className="inputUser"
                  />
                  <div style={{ display: "grid" }}>
                    <Input
                      icon="lock"
                      iconPosition="left"
                      placeholder="·········"
                      className="inputLock"
                    />
                    <p className="power">Forget Password?</p>
                  </div>

                  <button className="loginBtn">Login</button>

                  <div className="SideBorder mx-3"></div>
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

          <Container fluid>
            <Row>
              <Col lg={4}>
                <Card className="firstFractionDiv border-0 mt-5">
                  <Card.Body className="card" style={{ width: "18rem" }}>
                    <Card.Title className="headingFiveFirst">
                      Create a Smart
                    </Card.Title>
                    <Card.Subtitle className="mb-2 headingFiveSecond">
                      Profile
                    </Card.Subtitle>
                    <Card.Text>
                      Stand out, make a good impression, get topquality clients,
                      jobs, leads, customers or friends in your location or half
                      way across the wordl.
                    </Card.Text>
                    <button className="buttonCreateANewProfile">
                      Create a free profile
                    </button>
                  </Card.Body>
                </Card>
              </Col>
              {/* hhhhh */}
              <Col className="offset-lg-1 mt-5" lg={7} xs={12}>
                <Card className="signUp-card secondFraction">
                  <Card.Body>
                    <Card.Title className="fahad">Sing up</Card.Title>
                    <Form>
                      {/* First Row Start */}

                      <Form.Row>
                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                          <Form.Control
                            size="sm"
                            className="ml-4 mt-3 firstName"
                            type="text"
                            placeholder="First name"
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md={5}
                          controlId="formGridPassword"
                        >
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Surname"
                            className="mt-3 mh-25 firstName"
                          />
                        </Form.Group>
                      </Form.Row>

                      {/* First Row End */}

                      {/* Second Row Start */}
                      <Form.Row>
                        <Form.Group as={Col} md={5} controlId="formGridCity">
                          <Form.Label className="mt-3 ml-4 emailAddress">
                            Email Address
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            className="ml-4 testMail"
                            placeholder="test@email.com"
                          />
                        </Form.Group>

                        <Form.Group as={Col} md={3} controlId="formGridState">
                          <Form.Label className="mt-3 emailAddress">
                            Phone No.
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            placeholder="Contact"
                            className="testMail"
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md={4}
                          className="pt-4"
                          controlId="formGridZip"
                        >
                          <Form.Control
                            size="sm"
                            md={6}
                            placeholder="Country"
                            className="country"
                          />
                        </Form.Group>
                      </Form.Row>
                      {/* Second Row End */}

                      {/* Third Row Start */}
                      <Form.Row>
                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                          <Form.Label className="mt-3 ml-4 emailAddress">
                            Password
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            className="ml-4 testMail"
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md={6}
                          controlId="formGridPassword"
                        >
                          <Form.Label className="mt-3 emailAddress">
                            R-enter Password
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            className="testMail"
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </Form.Group>
                      </Form.Row>
                      {/* Third Row End */}

                      {/* Fourth Row Start */}
                      <Form.Row>
                        <Form.Group as={Col} md={3} controlId="formGridCity">
                          <Form.Label className="mt-4 ml-4 emailAddress">
                            Gender
                          </Form.Label>

                          <Form.Control
                            size="sm"
                            placeholder="Select Gender"
                            className="ml-4 testMail"
                          />
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                          <div className="lastColumn">
                            <Form.Label className="ml-4 testMail">
                              Date of birth
                            </Form.Label>
                            <div class="d-flex flex-row ">
                              <div class="">
                                <Form.Control
                                  size="sm"
                                  className="ml-4 testMail"
                                  placeholder="Day"
                                />
                              </div>
                              <div class="">
                                <Form.Control
                                  size="sm"
                                  className="ml-4 testMail"
                                  placeholder="Month"
                                />
                              </div>
                              <div class="">
                                <Form.Control
                                  size="sm"
                                  className="ml-4 testMail"
                                  placeholder="Year"
                                />
                              </div>
                            </div>
                          </div>
                        </Form.Group>
                      </Form.Row>
                      {/* Fourth Row End */}

                      {/* Five Row Start */}
                      <Form.Row>
                        <Form.Group
                          as={Col}
                          md={7}
                          controlId="formGridAddress1"
                        >
                          <Form.Label className="ml-4 mt-3 emailAddress">
                            Location
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            className="ml-4 testMail"
                            placeholder="Address "
                          />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md={2} controlId="formGridCity">
                          <Form.Control
                            size="sm"
                            className="ml-4 testMail"
                            placeholder="City"
                          />
                        </Form.Group>

                        <Form.Group as={Col} md={2} controlId="formGridZip">
                          <Form.Control
                            size="sm"
                            className="ml-2 testMail"
                            placeholder="Country"
                          />
                        </Form.Group>
                      </Form.Row>
                      {/* Fifth Row End */}
                    </Form>

                    <a href="/signup" className="nextButton">
                      Next
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              {/* hhhhh */}
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default SingUp;
