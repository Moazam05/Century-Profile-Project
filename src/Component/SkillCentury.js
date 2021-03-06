import React, { Component } from "react";
import "./SkillCentury.scss";

import { Card, Row, Form, Col } from "react-bootstrap";

export class SkillCentury extends Component {
  render() {
    return (
      <Card className="mt-5 ml-5 skillDesign">
        <Card.Body>
          <Card.Title className="editSkills">Skills</Card.Title>

          <Card.Subtitle className="mt-4 cardSub">Add a Skill</Card.Subtitle>

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
                  as="select"
                  className="fluency"
                  defaultValue="Choose..."
                >
                  <option>Seleck Skill</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>

          <button className="graphicDesignerSkill mt-3">
            Graphic Designer
          </button>

          <button className="buttonSaveasEditSkill mt-5">Save as Draft</button>
          <button className="buttonSaveEditLang mt-5 mb-4">Save</button>
        </Card.Body>
      </Card>
    );
  }
}

export default SkillCentury;
