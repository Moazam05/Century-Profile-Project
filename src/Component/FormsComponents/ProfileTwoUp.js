import React, { Component } from "react";

import "./ProfileTwoUp.scss";

import { Container } from "react-bootstrap";

export class ProfileTwoUp extends Component {
  render() {
    return (
      <>
        <Container fluid className="profile-row">
          <p className="profileP">Set up your Work Profile</p>
          <h5 className="headingFiveProfile">
            Unique Url & Link to other Online Identities
          </h5>
          <p className="h2"></p>
        </Container>
      </>
    );
  }
}

export default ProfileTwoUp;
