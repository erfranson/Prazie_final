import React from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';




const HomeBanner = () => {

  return (
    <Grid className="banner">
      <Row className="imageRow">
        <Col xs={3}>
          <img src="./images/kids.jpg" className="bannerimg" />
        </Col>
        <Col xs={3}>
          <img src="./images/tanja-heffner.jpg" className="bannerimg"/>
        </Col>
        <Col xs={3}>
          <img src="./images/parkcity.jpg" className="bannerimg" />
        </Col>
        <Col xs={3}>
          <img src="./images/gabriel-sanchez.jpg" className="bannerimg"/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="heading">
            <h1 className="text-center bannerText"><u>Prazie</u></h1>
            <h3 className="text-center bannerText" >A better way to capture life</h3>
        </Col>
      </Row>
      <Row className="imageRow">
        <Col xs={3}>
          <img src="./images/mubariz-mehdizadeh.jpg" className="bannerimg" />
        </Col>
        <Col xs={3}>
          <img src="./images/jamison-mcandie.jpg" className="bannerimg"/>
        </Col>
        <Col xs={3}>
          <img src="./images/jakob-owens.jpg" className="bannerimg" />
        </Col>
        <Col xs={3}>
          <img src="./images/vincent-guth.jpg" className="bannerimg"/>
        </Col>
      </Row>
    </Grid>

  );
};

export default HomeBanner;
