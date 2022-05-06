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
      <Container fluid>
        <Row className="topic-main-box">
          <Carousel className="carousel-div">
            <Carousel.Item>

              <img
                className="d-block  slider-image "
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
                src={Banner2}
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
                src={Banner3}
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
            <span>Get Familiar With Life Insurance Termaaaaaaaaaaaaaas</span>
          </Col>
        </Row>
        <Row>
        <HomeTable/>
          <Col xs={12} md={4} lg={4}>
            <div>
              <div>Underwritting</div>
              <div>Premium</div>
              <div>Grace period</div>
              <div>Coverage</div>
              <div>Beneficiary</div>
            </div>
          </Col>
          <Col xs={12} md={8} col={8}>
            <div>Underwriting is the process through which an insurer decides whether to cover and how much to charge. </div>
            <div>Premium is the amount you pay to continue being insured and keep your life insurance plan active. If you are unable to pay your premium before the payment due date and even during the grace period, yo… </div>
            <div>If you are unable to pay the premium for your policy on time and cross your premium payment due date, the life insurance company gives you an extension of a number of days. This is the ‘Grace Period’.… </div>
            <div>The life assured passing away could lead to a large financial loss; this amount is generally chosen as the amount of coverage required when buying a life insurance plan.
              For a life insurance company,… </div>
            <div>The beneficiary is the person or entity entitled to receive the claim amount and other benefits upon the death of the life assured or on maturity of the policy. </div>
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
                  <img src={Banner1} alt="First" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} alt="second" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} alt="third" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} alt="" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} alt="" className="bottom-slider-image" />
                </div>
                <div>
                  <img src={Banner1} alt="" className="bottom-slider-image" />
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
          <Col xs={12} md={4} lg={4}>
            <div>
              <div>Changing a policy</div>
              <div>Buying Online</div>
              <div>Before You Pay</div>
              <div>Paying your premium</div>
            </div>
          </Col>
          <Col xs={12} md={8} col={8}>
            <div>Yes. All insurance companies are prepared for a situation wherein you may wish to make changes to your policy. It could be a change in beneficiaries, the amount of coverage, investment allocations, etc.
              To begin with, you could start by reviewing your coverage. If you find it lacking, you can either ask your insurer to increase or decrease your protection as the case maybe, or cancel your policy altogether and look for another. </div>
            <div>The process of buying a Life Insurance policy has been digitized to a very large extent. You can now look through websites, select a policy, sign and upload documents, pay your premiums, settle a claim, etc. online. However, there might be a part of the process that could involve some physical interaction, such as a medical examination. All of this could vary based on the company’s processes and the policy you choose. </div>
            <div>To ensure your family remains protected, you regularly pay a small premium for it. Staying invested for the policy term not only maintains the shield of protection, but it also ensures you get your maturity benefit by the end of it. So, as long as your policy is the most suited one for you, it is always best to stay invested to get the most out of your policy. </div>
            <div>If you are unable to pay your premium on the date it is due, you enter the grace period. The grace period is generally a period of 15 days from the due date; you have to pay your premium within the grace period.
              In case you do not pay your premium even during the grace period, your policy lapses. </div>

          </Col>
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
