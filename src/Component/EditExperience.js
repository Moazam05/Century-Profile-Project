import React, { Component } from "react";
import "./EditExperience.scss";

import { Card, Form, Col } from "react-bootstrap";

export class EditExperience extends Component {
  render() {
    return (
      <Card className="mt-5 ml-5 startDivEE">
        <Card.Body className="ml-4">
          <Card.Title className="editEx">Edit - Experiences</Card.Title>

          <Form className="mt-4">
            <Form.Group md={9} as={Col} controlId="formGridAddress1">
              <Form.Label className="secondTextEE">Head Line</Form.Label>
              <Form.Control size="sm" className="mt-1 shapeEE" />
            </Form.Group>
          </Form>

          <Form.Label className="mt-4">
            <Form.Row>
              <Form.Group as={Col} md={4} controlId="formGridState">
                <Form.Control
                  size="sm"
                  as="select"
                  className="chooseEE"
                  defaultValue="Choose..."
                >
                  <option>Select Industry</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={4} controlId="formGridState">
                <Form.Control
                  size="sm"
                  as="select"
                  className="fluencyEE"
                  defaultValue="Choose..."
                >
                  <option>Speciality</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} md={6}>
              <div className="lastColumn">
                <Form.Label className="testMailEE">Start Date</Form.Label>
                <div class="d-flex flex-row ">
                  <div class="">
                    <Form.Control
                      size="sm"
                      className="testMailEEP"
                      placeholder="Day"
                    />
                  </div>
                  <div class="">
                    <Form.Control
                      size="sm"
                      className="testMailEEPTwo"
                      placeholder="Month"
                    />
                  </div>
                  <div class="">
                    <Form.Control
                      size="sm"
                      className="testMailEEPTwo"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
            </Form.Group>
            {/* ddddddddddd */}

            <Form.Group as={Col} md={12}>
              <div className="lastColumn">
                <Form.Label className="testMailEE">Still Working</Form.Label>
                <Form.Label className="ml-5 testMailEEED">End Date</Form.Label>
                <div class="d-flex flex-row ">
                  <div class="">
                    <Form.Control
                      size="sm"
                      className="testMailEEP"
                      placeholder="Day"
                    />
                  </div>
                  <div class="vl"></div>

                  <div class="">
                    <Form.Control
                      size="sm"
                      className="testMailEEPTwo"
                      placeholder="Month"
                    />
                  </div>
                  <div class="">
                    <Form.Control
                      size="sm"
                      className="testMailEEPTwo"
                      placeholder="Year"
                    />
                  </div>
                  <div class="">
                    <Form.Control
                      size="sm"
                      className="testMailEEPTwo"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
            </Form.Group>
          </Form.Label>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="cc ml-1">
              Description of Accompliments
            </Form.Label>
            <Form.Control as="textarea" rows="6" style={{ width: "63%" }} />
          </Form.Group>

          <div class="mt-2">
            <button className="butnCCDiscard mt-3 ml-4">Discard</button>
            <button className="ml-3 mb-5 butnSaveETB">Save</button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default EditExperience;
