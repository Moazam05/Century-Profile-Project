import React, { Component } from "react";

import { Card, Row, Col, Form } from "react-bootstrap";

import "./EditFeaturedLink.scss";

import link from "../Assets/images/link.png";

export class EditFeaturedLink extends Component {
  render() {
    return (
      <>
        <div className="mt-5 ml-5">
          <Card className="startDiv" >
            <Card.Body>
              <Card.Title className="cardTitle">
                Edit - Featured link
              </Card.Title>
              <div>
                <Row>
                  <Col>
                    <Card className="mt-3 boxColor border-0 card-Two">
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>

                  <Col className="mt-5">
                    <div className="dashed">
                      <img src={link} alt="" className="singleImage" />
                      <p className="paragraph">drag or upload project images</p>
                    </div>
                  </Col>
                </Row>
                <Form>
                  <Form.Row>
                    <Col className="mt-4" md={8}>
                      <Form.Control
                        md={4}
                        size="sm"
                        className="linkTitle"
                        placeholder="Link Title"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col className="mt-3" md={8}>
                      <Form.Control
                        md={4}
                        size="sm"
                        className="linkTitle"
                        placeholder="Insert Url"
                      />
                    </Col>
                  </Form.Row>
                </Form>
                <button className=" mt-4 buttonDiscardFeatured">Discard</button>
                <button className="mt-4 ml-3 mb-3  buttonFeatured">Save</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default EditFeaturedLink;
