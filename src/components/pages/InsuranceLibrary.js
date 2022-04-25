import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Overlay, Button } from 'react-bootstrap';
import { FaShareAlt } from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
import { FacebookIcon, FacebookShareButton } from "react-share";

const InsuranceLibrary = () => {
  const [question, fetchQuestion] = useState([]);
  const [show, setShow] = useState(false);
  const target = useRef(null);


  const getQuestions = () => {
    fetch('http://localhost:4000/library/library'
    )
      .then((res) => res.json())
      .then((res) => {
        fetchQuestion(res)
      })
    console.log('Lib is ', question);
  }

  useEffect(() => {
    getQuestions()
    console.log('effect 1', question);
  }, [])


  const NavLists = [
    {
      'heading': 'Insurance Library',
      'icon': '<FaAtlas />',
      'url': '/insurance-library'
    },
    {
      'heading': 'Glosary',
      'icon': 'FaBook',
      'url': '/glossary'
    }
  ]
  // const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const bannerStyle = {
    width: '100%',
    border: 1
  }
  return (
    <>
      <Header />
      <Container>

        <Row>
          <Col xs={12} md={3} lg={3} className="sidenav-box">
            {NavLists.map((d,i) =>
              <Navs key={i} heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div>
              <span className='main-text-heading'>Insurance Library</span>
            </div>
            {question.map((element,index) =>
              <Row key={index} className='library-main-box shadow px-2 py-3 align-items-center'>
                <Col xs={4} md={4} lg={3} className="library-image">
                  <img src={element.picture} alt="Banner" />
                </Col>
                <Col col={8} md={8} lg={9}>

                  <div className='d-flex flex-wrap justify-content-between'><div><h5 className='mb-0'>{element.title} </h5> <small className='d-block'>04/12/19</small></div>
                    {/* <Button variant="danger" ref={target} onClick={() => setShow(!show)} className='library-share'><FaShareAlt />
                     
                    </Button> */}
                    <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
                      Click me to see
                    </Button>
                    <Overlay target={target.current} show={show} placement="right">
                      {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(255, 100, 100, 0.85)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                          }}
                        >
                          Simple tooltip
                        </div>
                      )}
                    </Overlay>

                  </div>

                  <p className='mb-0 mt-3'>
                    {element.description }  <a href="" className='text-underline text-dark read-more-btn' ><strong>Read More</strong></a>
                  </p>
                </Col>
              </Row>
            )}

          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default InsuranceLibrary