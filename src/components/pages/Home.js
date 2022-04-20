import React from "react";
import { Container, Row, Col, Carousel, CarouselItem, Button, Card } from "react-bootstrap";
import YoutubeEmbed from "../YoutubeEmbed";
import "./../../assets/styles/common.css";
import Banner1 from './../../assets/banner1.jpg';
import Banner2 from './../../assets/banner2.jpg';
import Share from './../../assets/share.jpg';
import Slider from "react-slick";
import Footer from './../common/Footer';
import Header from './../common/Header';
import SocialComponent from "../common/Socials";
const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div>
      <Header/>
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
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending mb-0 pt-5">
            <h2>Trending Topics About Life Insurance</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="topic-main-box">
          <Carousel className="carousel-div">
            <Carousel.Item>
              <img
                className="d-block  slider-image"
                src={Banner1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  slider-image"
                src={Banner1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  slider-image"
                src={Banner1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container>
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
            <span>Trending Topics About Life Insurance</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <div>
              <div>Under Writting</div>
              <div>Under Writting</div>
              <div>Under Writting</div>
              <div>Under Writting</div>
              <div>Under Writting</div>
            </div>
          </Col>
          <Col xs={12} md={8} col={8}>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
          </Col>
        </Row>
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
            <h2 className="mb-0 pt-5">Trending Topics About Life Insurance</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='slider-main'>
              <h2>Center Mode</h2>
              <Slider {...settings}>
                <div>
                  <img src={Banner1} className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} className="bottom-slider-image" />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
            <span>Trending Topics About Life Insurance</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <div>
              <div>Under Writting</div>
              <div>Under Writting</div>
              <div>Under Writting</div>
              <div>Under Writting</div>
              <div>Under Writting</div>
            </div>
          </Col>
          <Col xs={12} md={8} col={8}>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col xs={12} md={12} lg={12} className="homeTrending ">
            <h2 className='mb-0 pt-4'>Trending Topics About Life Insurance</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="insurance-solution-div">
            <Card >
              <Card.Img variant="top" src={Banner1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
