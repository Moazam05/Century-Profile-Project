import React, { Component } from "react";
import "./EditAudience.scss";

import { Card, Row, Col, Container, Form } from "react-bootstrap";

export class EditAudience extends Component {
  render() {
    return (
      <>
        <Card className="mt-5 ml-5 audienceDiv">
          <Card.Body>
            <Card.Title className="headingAudience">Edit - Audience</Card.Title>
            <Container className="mt-4">
              <Row>
                <Col className="ml-2">
                  <Row>
                    <div style={{ display: "contents" }}>
                      <div>
                        <i class="fab fa-instagram fa-3x"></i>
                      </div>

                      <div>
                        <Form className="ml-4">
                          <Form.Row>
                            <Form.Group
                              md={12}
                              as={Col}
                              controlId="formGridCity"
                            >
                              <Form.Label className="allText ml-2">
                                How many followers do you have?
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="ml-2 labelWidth"
                              />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <Form className="mt-1">
                      <Form.Row>
                        <Form.Group as={Col} md={15} controlId="formGridEmail">
                          <Form.Label className="allText">
                            Audience Information
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="email"
                            className="infoWidth"
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Row>
                  {/* Row Three Start */}
                  <Row className="mt-4">
                    <div style={{ display: "contents" }}>
                      <div>
                        <i class="fab fa-linkedin fa-3x"></i>
                      </div>

                      <div>
                        <Form className="ml-4">
                          <Form.Row>
                            <Form.Group
                              md={12}
                              as={Col}
                              controlId="formGridCity"
                            >
                              <Form.Label className="allText ml-2">
                                How many followers do you have?
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="ml-2 labelWidth"
                              />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </div>
                    </div>
                  </Row>
                  {/* Row Three End */}

                  <Row>
                    <Form className="mt-1">
                      <Form.Row>
                        <Form.Group as={Col} md={15} controlId="formGridEmail">
                          <Form.Label className="allText">
                            Audience Information
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="email"
                            className="infoWidth"
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Row>
                  <Row className="mt-4">
                    <div style={{ display: "contents" }}>
                      <div>
                        <i class="fab fa-github fa-3x"></i>
                      </div>

                      <div>
                        <Form className="ml-4">
                          <Form.Row>
                            <Form.Group
                              md={12}
                              as={Col}
                              controlId="formGridCity"
                            >
                              <Form.Label className="allText ml-2">
                                How many followers do you have?
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="ml-2 labelWidth"
                              />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <Form className="mt-1">
                      <Form.Row>
                        <Form.Group as={Col} md={15} controlId="formGridEmail">
                          <Form.Label className="allText">
                            Audience Information
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="email"
                            className="infoWidth"
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Row>
                </Col>
                <Col className="ml-4">
                  <Row>
                    <div style={{ display: "contents" }}>
                      <div>
                        <i class="fab fa-facebook fa-3x"></i>
                      </div>

                      <div>
                        <Form className="ml-4">
                          <Form.Row>
                            <Form.Group
                              md={12}
                              as={Col}
                              controlId="formGridCity"
                            >
                              <Form.Label className="allText ml-2">
                                How many followers do you have?
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="ml-2 labelWidth"
                              />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <Form className="mt-1 ml-2">
                      <Form.Row>
                        <Form.Group as={Col} md={15} controlId="formGridEmail">
                          <Form.Label className="allText">
                            Audience Information
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="email"
                            className="infoWidthSecond"
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Row>
                  <Row className="mt-4">
                    <div style={{ display: "contents" }}>
                      <div>
                        <i class="fab fa-youtube fa-3x"></i>
                      </div>

                      <div>
                        <Form className="ml-4">
                          <Form.Row>
                            <Form.Group
                              md={12}
                              as={Col}
                              controlId="formGridCity"
                            >
                              <Form.Label className="allText ml-2">
                                How many followers do you have?
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="ml-2 labelWidth"
                              />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <Form className="mt-1 ml-2">
                      <Form.Row>
                        <Form.Group as={Col} md={15} controlId="formGridEmail">
                          <Form.Label className="allText">
                            Audience Information
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="email"
                            className="infoWidthSecond"
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Row>
                  <Row className="mt-4">
                    <div style={{ display: "contents" }}>
                      <div>
                        <i class="fab fa-tiktok fa-3x"></i>
                      </div>

                      <div>
                        <Form className="ml-4">
                          <Form.Row>
                            <Form.Group
                              md={12}
                              as={Col}
                              controlId="formGridCity"
                            >
                              <Form.Label className="allText ml-2">
                                How many followers do you have?
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="ml-2 labelWidth"
                              />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <Form className="mt-1 ml-2">
                      <Form.Row>
                        <Form.Group as={Col} md={15} controlId="formGridEmail">
                          <Form.Label className="allText">
                            Audience Information
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="email"
                            className="infoWidthSecond"
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Row>
                </Col>
              </Row>
              <button className=" mt-4 buttonDiscardAudience">Discard</button>
              <button className="mt-4 ml-3 mb-3 buttonNextAudience">
                Save
              </button>
            </Container>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default EditAudience;
