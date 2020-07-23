import React, { Component } from "react";
import "./EditTextBlock.scss";

import { Card, Form } from "react-bootstrap";

export class EditTextBlock extends Component {
  render() {
    return (
      <Card className="mt-5 ml-5 textBlock">
        <Card.Body>
          <Card.Title className="editTextBlock">Edit - Text Block</Card.Title>
        </Card.Body>

        <Form.Group
          className="mb-5 mt-4 disignHH"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            rows="18"
            placeholder="Type Text"
            className="placeBlock"
          />
        </Form.Group>
        <div>
          <button className="buttonDiscardETB ml-4">Discard</button>
          <button className="ml-3 mb-5 buttonSaveETB">Save</button>
        </div>
      </Card>
    );
  }
}

export default EditTextBlock;
