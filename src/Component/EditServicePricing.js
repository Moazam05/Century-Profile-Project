import React, { Component } from "react";
import "./EditServicePricing.scss";

import { Card, Form, Col } from "react-bootstrap";

export class EditServicePricing extends Component {
  render() {
    return (
      <>
        <Card className="mt-5 ml-5 complrLay">
          <Card.Body>
            <Card.Title className="servicePricing">
              Edit - Service Pricing
            </Card.Title>
          </Card.Body>

          <Form>
            <Form.Group md={11} as={Col} controlId="formGridAddress1">
              <Form.Label className="allTextDesign">Header Text</Form.Label>
              <Form.Control size="sm" className="ml-4 mt-1 shape" />
            </Form.Group>
          </Form>

          <Form className="mt-3">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="exapmle">
                Description & Benefits
              </Form.Label>
              <Form.Control
                size="sm"
                className="ml-4 shape www"
                style={{ width: "73%" }}
                as="textarea"
                rows="7"
              />
            </Form.Group>
          </Form>

          <Form className="mt-3">
            <Form.Group md={7} as={Col} controlId="formGridAddress1">
              <Form.Label className="allTextDesign">Cost</Form.Label>
              <Form.Control size="sm" className="ml-4 shape" />
            </Form.Group>
          </Form>

          <div className="mt-0">
            <button className="buttonDiscardEditServicePricing mt-4">
              Discard
            </button>
            <button className="buttonSaveEditServicePricing mt-4 mb-5">
              Save
            </button>
          </div>
        </Card>
      </>
    );
  }
}

export default EditServicePricing;
