import React, { Component } from "react";
import "./EditPhysicalAttribute.scss";

import { Card, Row, Col, Form } from "react-bootstrap";

export class EditPhysicalAttribute extends Component {
  render() {
    return (
      <>
        <Card
          className="mt-5 ml-5 boxStyleEdit-ProfileAttribute"
          //   style={{ width: "43rem" }}
        >
          <Card.Body>
            <Card.Title className="mainHeading">
              Edit - Physical Attributes
            </Card.Title>

            <Form>
              <Form.Row className="mt-5">
                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label className="labelHeading">Ethencity</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label className="labelHeading">Skin Color</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label className="labelHeading">Eye Color</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              {/* Second Row Start */}
              <Form.Row className="mt-3">
                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label className="labelHeading">Hair Length</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label className="labelHeading">Piercings</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label className="labelHeading">Tatoos</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </Form>

            <hr className="human" />
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Age</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Height</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Weight</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Bust</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Hips</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Cup</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Dress size</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="labelHeading">Shoe</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              {/* ff */}
              <Form.Row>
                <Form.Group as={Col} md={3} controlId="formGridState">
                  <Form.Label className="labelHeading">Waist</Form.Label>
                  <Form.Control size="sm" as="select" defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </Form>
            <button className="buttonDiscardEdit-PhysicalAttribute mt-5">
              Save as Draft
            </button>
            <button  className="buttonSaveEdit-PhysicalAttribute mt-5 mb-4">
              Save
            </button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default EditPhysicalAttribute;
