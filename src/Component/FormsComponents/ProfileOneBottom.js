import React, { Component } from "react";

import "./ProfileOneBottom.scss";

import { Container, Row, Col, Form } from "react-bootstrap";

export class ProfileOneBottom extends Component {
  render() {
    return (
      <>
        <Container fluid className="profile-row">
          <Row style={{marginLeft:"-35px"}}>
            <Col>
              <Form.Row className="para">
                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label>Profile Type</Form.Label>
                  <Form.Control
                    class="d-flex flex-row"
                    lg={8}
                    sm={12}
                    size="sm"
                    as="select"
                    value="Choose..."
                  >
                    <option>Work</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form>
                <Form.Row className="para">
                  <Form.Group as={Col} lg={3} controlId="formGridState">
                    <Form.Label>What services you can offer?</Form.Label>
                    <Form.Control size="sm" as="select" value="Choose...">
                      <option>Select Industry</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} lg={3} controlId="formGridState">
                    <Form.Label className="mt-3 "></Form.Label>
                    <Form.Control
                      size="sm"
                      as="select"
                      value="Choose..."
                      className="sms"
                    >
                      <option>Speciality</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  {/* <Form.Row> */}
                  <Form.Group as={Col} md={1} controlId="formGridCity">
                    <Form.Control
                      size="sm"
                      className="mt-4 buttonPlus"
                      placeholder="+"
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
              <button className="graphicDesigner para mt-2">
                Graphic Designer
              </button>

              <Form className="availabily mt-5">
                <Form.Group as={Col} md={6} className="ml-5 ">
                  <div className="space">
                    <Form.Label className="ml-4 spaceTwo">
                      Availability
                    </Form.Label>
                    <div class="d-flex flex-row ">
                      <div class="" className="spaceZero">
                        <Form.Control
                          size="sm"
                          className="ml-4 spaceTwo"
                          placeholder="Ful-time"
                        />
                      </div>
                      <div class="" className="spaceZero">
                        <Form.Control
                          size="sm"
                          className="ml-3 spaceTwo"
                          placeholder="Part-time"
                        />
                      </div>
                      <div class="" className="spaceFour">
                        <Form.Control
                          size="sm"
                          className="ml-2 spaceTwo"
                          placeholder="Self-Emplyed"
                        />
                      </div>
                    </div>
                  </div>
                </Form.Group>
              </Form>

              <Form className="availabily contact">
                <Form.Group as={Col} md={6} className="ml-5 ">
                  <div className="space">
                    <div class="d-flex flex-row">
                      <div class="" className="spaceFive">
                        <Form.Control
                          size="sm"
                          className="ml-4 spaceTwo"
                          placeholder="Contact"
                        />
                      </div>
                      <div class="" className="spaceSix">
                        <Form.Control
                          size="sm"
                          className="ml-3 spaceTwo"
                          placeholder="Apprencitceship"
                        />
                      </div>
                      <div class="" className="spaceZero">
                        <Form.Control
                          size="sm self-Employed"
                          className="ml-2 spaceTwo"
                          placeholder="Freelance"
                        />
                      </div>
                    </div>
                  </div>
                </Form.Group>
              </Form>

              <div className="para">
                <h4>Brief Bio</h4>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows="5"
                      className="spaceSeven"
                    />
                  </Form.Group>
                </Form>

              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProfileOneBottom;
