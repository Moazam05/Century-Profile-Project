import React, { Component } from "react";
import "./EditLanguage.scss";

import { Card, Form, Col, Row } from "react-bootstrap";

export class EditLanguage extends Component {
  render() {
    return (
      <>
        <Card className="mt-5 ml-5 mainDesign">
          <Card.Body>
            <Card.Title className="editLanguage">Edit Language</Card.Title>

            <Form className="mt-5">
              <Form.Row>
                <Form.Group as={Col} md={4} controlId="formGridState">
                  <Form.Control
                    size="sm"
                    as="select"
                    className="choose"
                    defaultValue="Choose..."
                  >
                    <option>Select Language</option>
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
                    <option>Choose fluency</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md={1}
                  className="plus"
                  controlId="formGridState"
                >
                  <i class="fas fa-plus"></i>
                </Form.Group>
              </Form.Row>
            </Form>

            <Row className="mt-3">
              <Col md={4} className="headingText">
                English - Fluent
              </Col>
              <Col className="headingText">Hausa - Basic</Col>
            </Row>
            <Row className="mt-2">
              <Col className="headingText">lgbo - Fluent</Col>
            </Row>

            <button className="buttonDiscardEditLang mt-5">
              Save as Draft
            </button>
            <button className="buttonSaveEditLang mt-5 mb-4">Save</button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default EditLanguage;
