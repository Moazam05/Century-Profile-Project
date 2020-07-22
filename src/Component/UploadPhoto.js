import React, { Component } from "react";
import "./UploadPhoto.scss";

import { Card, Col, Form } from "react-bootstrap";

import link from "../Assets/images/link.png";

export class UploadPhoto extends Component {
  render() {
    return (
      <>
        <div className="mt-5 ml-5">
          <Card className="boxStyleUpload-Photo">
            <Card.Body>
              <Card.Title className="headingUpload-Photo">
                Upload - Photo
              </Card.Title>

              <Col>
                <div className="card cardTwo">
                  <div className="card-body ">
                    <div className="boxImagePUpload-Photo">
                      <img
                        src={link}
                        alt="image not found"
                        className="pl-5  imgLinkPUploadPhoto"
                      />
                      <span>drag or upload project Images</span>
                      <p className="mt-1 paragrphUpload-Photo">
                        Not more than 200kb, 1080*720
                      </p>
                    </div>
                  </div>
                </div>
                <Form>
                  <Form.Row>
                    <Col className="mt-4" md={10}>
                      <Form.Control
                        md={4}
                        size="sm"
                        className="linkTitleUpload-Photo"
                        placeholder="Photo Title"
                      />
                    </Col>
                  </Form.Row>
                </Form>
                <button className="buttonDiscardUpload-Photo mt-5">
                  Discard
                </button>
                <button className="buttonSaveUpload-Photo mt-5">Save</button>
              </Col>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default UploadPhoto;
