import React from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';


const HowTo = () => {
  return(
    <Grid>
      <Row id="howTo">
        <Col>
          <h2 className="text-center">Getting Started</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className="steps">
          <span><i className="fa fa-pencil" aria-hidden="true"></i></span>
          <h3>Create A Profile</h3>
        </Col>
        <Col xs={3} className="steps">
          <span><i className="fa fa-camera-retro" aria-hidden="true"></i></span>
          <h3>Find a Photographer</h3>
        </Col>
        <Col xs={3} className="steps">
          <span><i className="fa fa-calendar" aria-hidden="true"></i></span>
          <h3>Book a Photographer</h3>
        </Col>
        <Col xs={3} className="steps">
          <span><i className="fa fa-picture-o" aria-hidden="true"></i></span>
          <h3>Get your Pictures</h3>
        </Col>

      </Row>
    </Grid>
  );
};

export default HowTo;
