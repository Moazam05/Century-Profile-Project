import React, { Component } from "react";
import "./EditInterest.scss";

import { Card, Form, Col } from "react-bootstrap";

export class EditInterest extends Component {
  render() {
    return (
      <Card className="mt-5 ml-5 editDesign">
        <Card.Body>
          <Card.Title className="editSkills">Edit Interests</Card.Title>

          <Card.Subtitle className="mt-4 cardSubZZ">
            Add an Interest
          </Card.Subtitle>

          <Form className="mt-3 ml-3">
            <Form.Row>
              <Form.Group as={Col} md={4} controlId="formGridState">
                <Form.Control
                  size="sm"
                  as="select"
                  className="choose"
                  defaultValue="Choose..."
                >
                  <option>Select Industry</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={4} controlId="formGridState">
                <Form.Control
                  size="sm"
                  className="fluencyzz"
                  placeholder="Find Interest"
                ></Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>

          <button className="graphicDesignerSkillX mt-3">
            Graphic Designer
          </button>

          <button className="buttonSaveasEditInterest mt-5">
            Save as Draft
          </button>
          <button className="buttonSaveEditInterest mt-5 mb-4">Save</button>
        </Card.Body>
      </Card>
    );
  }
}

export default EditInterest;
