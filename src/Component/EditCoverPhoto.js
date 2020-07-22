import React, { Component } from "react";

import { Col, Card } from "react-bootstrap";

import "./EditCoverPhoto.scss";

import link from "../Assets/images/link.png";

export class EditCoverPhoto extends Component {
  render() {
    return (
      <>
        <div className="mt-5 ml-5">
          <Card  className="boxStyle">
            <Card.Body>
              <Card.Title className="heading">Edit - Cover Photo</Card.Title>

              <Col>
                <div className="card cardTwo">
                  <div className="card-body ">
                    <div className="boxImageP">
                      <img
                        src={link}
                        alt="image not found"
                        className="pl-5  imgLinkP"
                      />
                      <span>drag or upload project Images</span>
                      <p className="mt-1 paragrph">
                        Not more than 200kb, 1080*720
                      </p>
                    </div>
                  </div>
                </div>
                <button className="buttonDiscardCover mt-5">Discard</button>
                <button className="buttonSaveCover mt-5">Save</button>
              </Col>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default EditCoverPhoto;
