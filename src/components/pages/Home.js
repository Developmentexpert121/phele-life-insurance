import React from "react";
import { Container, Row, Col, Carousel, CarouselItem, Button, Card } from "react-bootstrap";
import YoutubeEmbed from "../YoutubeEmbed";
import "./../../assets/styles/common.css";
import Banner1 from './../../assets/banner1.jpg';
import Banner2 from './../../assets/banner2.jpg';
import Banner3 from './../../assets/banner3.jpg';
import Banner4 from './../../assets/banner4.jpg';
import Banner5 from './../../assets/banner5.jpg';
import Share from './../../assets/share.jpg';
import Slider from "react-slick";
import Footer from './../common/Footer';
import Header from './../common/Header';
import SocialComponent from "../common/Socials";
import HomeTable from './HomeTable'
import HomeTableFaq from "./HomeTableFaq";


const Home = () => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  // };
  var settings = {
    centerMode: true,
    className: "centerClass",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
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
          <Col>
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={Banner1} />
              <Card.Body>
                <Card.Title>
                  <Row>
                    <Col xs={12} md={8} lg={8} xl={8}>Why Life Insurance is Sabse Pehle? </Col>
                    <Col>
                      <img alt="" src={Share} />
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
                      <img alt="" src={Share} />
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

                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
            <div className='slider-main'>

              <Slider {...settings}>
                <div>
                  <img src={Banner1} alt="First" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner2} alt="second" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner3} alt="third" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} alt="First" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner2} alt="second" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner3} alt="third" className="bottom-slider-image" />
                </div>
               

              </Slider>
            </div>
          </Col>
        </Row>
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
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
                <Card.Title>I am starting out</Card.Title>
                <Card.Text>
                  Be a smart investor by taking advantage of your age and earning potential.
                </Card.Text>
                <Button variant="primary">Get Started</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner4} />
              <Card.Body>
                <Card.Title>I have growing responsibilities</Card.Title>
                <Card.Text>
                  Invest towards your future goals.
                </Card.Text>
                <Button variant="primary">Get Started</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner5} />
              <Card.Body>
                <Card.Title>
                  I am nearing retirement</Card.Title>
                <Card.Text>
                  Prepare for a carefree retired life.
                </Card.Text>
                <Button variant="primary">Get Started</Button>
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
