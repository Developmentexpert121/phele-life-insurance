import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import YoutubeEmbed from "../YoutubeEmbed";
import "./../../assets/styles/common.css";
import Footer from './../common/Footer';
import Header from './../common/Header';
import SocialComponent from "../common/Socials";
import HomeTable from './HomeTable'
import HomeTableFaq from "./HomeTableFaq";
import ShareButton from "../../ShareIcon";
import MySlider from "./Carousal"

import Banner1 from './../../assets/banner1.jpg';
import Banner2 from './../../assets/banner2.jpg';
import Banner3 from './../../assets/banner3.jpg';
import Banner4 from './../../assets/banner4.jpg';
import Banner5 from './../../assets/banner5.jpg';



const Home = () => {
  return (
    <div>
      <Header />
      <YoutubeEmbed />
      <Container className="pt-5 pb-1" fluid="md">
        <Row>
          <Col xs={12} md={12} lg={12} className="yooo">
            <h2>Apni Life Ko Sabse Pehle Do Life Insurance Ka Bharosa</h2>
          </Col>
        </Row>
        <Row className="insurance-sub-box">
          <Col xs={12} md={6}>
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={Banner1} />
              <Card.Body>
                <Card.Title className="text-blue" >
                  <Row>
                    <Col xs={12} md={8} lg={8} xl={8}>Why Life Insurance is Sabse Pehle? </Col>
                    <Col>
                      <ShareButton title = "Why Life Insurance is Sabse Pehle?" />
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Text>
                  So what exactly is Life Insurance? Find out why you need Life Insurance before securing yourself in other ways.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={Banner2} />
              <Card.Body>
                <Card.Title className="text-blue">
                  <Row>
                    <Col xs={12} md={8} lg={8} xl={8}>How do I get started?</Col>
                    <Col>
                      <ShareButton title = "How do I get started?"/>
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
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending mb-0 pt-5">
            <h2>Trending Topics About Life Insurance</h2>
          </Col>
        </Row>
      </Container>

      <Row className="topic-main-box">
        <Container>
          <Carousel className="carousel-div">

            <Carousel.Item>
              <Col xs={6} md={6} lg={6} className="homeTrending mb-0 ">
                <img
                  className="d-block  slider-image "
                  src={Banner1}
                  alt="First slide"
                />
              </Col>
              <Carousel.Caption>
                <Col xs={6} md={6} lg={6} className="homeTrending mb-0 ">

                  <h3>New to Life Insurance? Karo sabse pehle!</h3>
                  <p style={{fontSize:"1.2rem",color:'black' }}>Decided on buying Life Insurance? Life Insurance is the only financial instrument that keeps your life goals protected...</p>
                </Col>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Col xs={6} md={6} lg={6} className="homeTrending mb-0 ">
                <img
                  className="d-block  slider-image"
                  src={Banner2}
                  alt="Second slide"
                />
              </Col>
              <Carousel.Caption>
                <Col xs={6} md={6} lg={6} className="homeTrending mb-0 ">
                  <h3>Factors to keep in mind before choosing Life Insurance</h3>
                  <p style={{fontSize:"1.2rem",color:'black' }}>Life Insurance is for everyone. It gives you peace of mind knowing that your family will be financially...</p>
                </Col>


              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Col xs={6} md={6} lg={6} className="homeTrending mb-0 ">

                <img
                  className="d-block  slider-image"
                  src={Banner3}
                  alt="Third slide"
                />
              </Col>

              <Carousel.Caption>
                <Col xs={6} md={6} lg={6} className="homeTrending mb-0 ">

                  <h3>Is there a Life Insurance policy specifically for women?</h3>
                  <p style={{fontSize:"1.2rem",color:'black' }}>Women run as a natural pillar in the family, taking multiple roles of a mother, a daughter, or a wife...</p>
                </Col>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Row>

      <Container>
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
            <span>Get Familiar With Life Insurance Terms</span>
          </Col>
        </Row>
        <Row>
          <HomeTable />
        </Row>
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
            <h2 className="mb-0 pt-5">Trending Topics About Life Insurance</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <MySlider/>
          </Col>
        </Row>
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} style={{margin:"50px"}} className="homeTrending">
            <span>Commonly Asked Questions</span>
          </Col>
        </Row>
        <Row>
          <HomeTableFaq />
        </Row>
        <Row className='pt-5'>
          <Col xs={12} md={12} lg={12} className="homeTrending ">
            <h2 className='mb-0 pt-4'>I am looking for specific Life Insurance solutions</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner3} />
              <Card.Body>
                <Card.Title className="text-blue">I am starting out</Card.Title>
                <Card.Text style={{minHeight:"50px"}}>
                  Be a smart investor by taking advantage of your age and earning potential.
                </Card.Text>
                {/* <Button variant="light">Get Started</Button> */}
                <Link to="/who-needs-life-insurance"> Get Started</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner4} />
              <Card.Body>
                <Card.Title className="text-blue" >I have growing responsibilities</Card.Title>
                <Card.Text  style={{minHeight:"50px"}}>
                  Invest towards your future goals.
                </Card.Text>
                {/* <Button variant="light">Get Started</Button> */}
                <Link to="/who-needs-life-insurance"> Get Started</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner5} />
              <Card.Body  >
                <Card.Title className="text-blue">
                  I am nearing retirement</Card.Title>
                <Card.Text style={{minHeight:"50px"}}>
                  Prepare for a carefree retired life.
                </Card.Text>
                {/* <Button variant="light">Get Started</Button> */}
                <Link to="/who-needs-life-insurance"> Get Started</Link>

              </Card.Body>
            </Card>
          </Col>
        </Row>
        <SocialComponent />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
