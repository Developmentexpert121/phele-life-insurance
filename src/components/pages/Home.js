import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import YoutubeEmbed from "../YoutubeEmbed";
import "./../../assets/styles/common.css";
import Banner1 from './../../assets/banner1.jpg';
import Banner2 from './../../assets/banner2.jpg';
import {FaShareAlt} from "react-icons/fa";
import Share from './../../assets/share.jpg';
const Home = () => {
  return (
    <div>
      <YoutubeEmbed />
      <Container className="py-lg-4" fluid="md">
        <Row>
          <Col xs={12} md={12} lg={12} className="yooo">
            <centre>
              <span>Apni Life Ko Sabse Pehle Do Life Insurance Ka Bharosa</span>
            </centre>
          </Col>
        </Row>
        <Row className="insurance-sub-box">
          <Col>
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={Banner1} />
              <Card.Body>
               
                <Card.Title>
                <Row>
                  <Col xs={12} md={8} lg={8} xl={8}>Why Life Insurance is Sabse Pehle? </Col>
                  <Col>
                  <img src={Share} />
                  </Col>
                </Row>
                </Card.Title>
                <Card.Text>
                So what exactly is Life Insurance? Find out why you need Life Insurance before securing yourself in other ways.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={Banner2} />
              <Card.Body>
                <Card.Title>
                  <Row>
                  <Col xs={12} md={8} lg={8} xl={8}>How do I get started?</Col>
                  <Col>
                  <img src={Share} />
                  </Col> 
                  </Row>
                  </Card.Title>
                <Card.Text>
                What do you need to do to get yourself insured? Getting started with Life Insurance has never been easier.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row class='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
              <span>Trending Topics About Life Insurance</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
