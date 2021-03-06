import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
import ShareIcon from "../../ShareIcon"
const url = process.env.REACT_APP_URL

const InsuranceLibrary = () => {
  const [question, fetchQuestion] = useState([]);
  
  const getQuestions = () => {
    fetch(url+'/library/library'
    )
      .then((res) => res.json())
      .then((res) => {
        fetchQuestion(res)
      })
    // console.log('Lib is ', question);
  }

  useEffect(() => {
    getQuestions()
    // console.log('effect 1', question);
  }, [question])


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

  return (
    <>
      <Header />
      <Container>

        <Row>
          <Col xs={12} md={3} lg={3} className="sidenav-box">
            {NavLists.map((d, i) =>
              <Navs key={i} heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div>
              <span className='main-text-heading heading-margin'>Insurance Library</span>
            </div>
            {question.map((element, index) =>
              <Row key={index} className='library-main-box shadow px-2 py-3 align-items-center'>
                <Col xs={4} md={4} lg={3} className="library-image">
                  <img src={element.picture} alt="Banner" />
                </Col>
                <Col col={8} md={8} lg={9}>

                  <Row>
                    <Col>
                      <div className='d-flex flex-wrap justify-content-between text-blue'>
                        <div>
                          <h5 className='mb-0'>{element.title}
                          </h5>
                          <small className='d-block'>04/12/19</small>
                        </div>
                      </div>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                      <ShareIcon title={element.title} />
                    </Col>
                  </Row>
                  <div className='mb-0 mt-3'>
                    <div dangerouslySetInnerHTML={{ __html: element.description }} />
                    <a href={'insurance-library/' + element.slug} className='text-underline' ><strong>Read More</strong></a>
                  </div>
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