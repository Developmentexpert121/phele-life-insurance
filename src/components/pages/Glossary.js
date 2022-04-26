import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import { FaShieldAlt, FaAtlas, FaBook } from 'react-icons/fa';
// import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';

const Glossary = () => {

  const [keywords, setKeywords] = useState([]);

  const getKeyword = () => {
    fetch('http://localhost:4000/glossary/keyword'
    )
      .then((res) => res.json())
      .then((res) => {
        setKeywords(res)
      })
  }

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

  const bannerStyle = {
    width: '100%',
    border: 1
  }

  useEffect(() => {
    getKeyword()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3} className="sidenav-box">
            {NavLists.map((d, index) =>
              <Navs key={index} heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div>
              <span className='main-text-heading'>Glossary</span>
            </div>

            <Col xs={12} md={12} lg={12}>
              <div>
                <span className='main-text-heading'>Insurance Library</span>
              </div>
              {keywords.sort((a, b) => (a.keyword > b.keyword) ? 1 : -1).map((element, index) =>
                <Row key={index} className='library-main-box shadow px-2 py-3 align-items-center'>

                  <Col col={12} md={12} lg={12}>
                    <div className='d-flex flex-wrap justify-content-between'><div>
                      <h5 className='mb-0'>{element.keyword} </h5>
                    </div>
                    </div>
                    <p className='mb-0 mt-3'> {element.definition} </p>
                  </Col>
                </Row>
              )}

            </Col>
          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default Glossary