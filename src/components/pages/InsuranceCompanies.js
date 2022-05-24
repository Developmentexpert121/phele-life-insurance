import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
import CompaniesLibrary from './../CompaniesLibraryComponent';
// import { FaShieldAlt } from 'react-icons/fa';
// import Banner1 from './../../assets/banner1.jpg';

const InsuranceCompany = () => {
  const NavLists = [
    {
      'heading': 'About IRDAI',
      'icon': '<FaAtlas />',
      'url': '/about'
    },
    {
      'heading': 'About Life Insurance Council',
      'icon': 'FaBook',
      'url': '/about-life-insurance-council'
    },
    {
      'heading': 'Life Insurance Companies',
      'icon': 'FaBook',
      'url': '/insurance-companies'
    },
    {
      'heading': 'News & Media',
      'icon': 'FaBook',
      'url': '/news-media'
    }
  ]

  const [companies, setCompanies] = useState([]);

  const getCompanies = () => {
    fetch('http://localhost:4000/companies/companies-list'
    )
      .then((res) => res.json())
      .then((res) => {
        setCompanies(res)
      })
  }
  useEffect(() => {
    getCompanies()
    // console.log('effect 1', companies);
  }, [companies])

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
            {NavLists.map((d, i) =>
              <Navs key={i} heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col>
            <Row xs={12} md={9} lg={9} >
              <span className='main-text-heading mb-4 heading-margin'>List of Life Insurance Companies</span>
            </Row>
            <Row xs={12} md={9} lg={9}>

              {companies.map((d, i) =>
                <Col xs={12} md={6} lg={6} key={i} >
                  <CompaniesLibrary  name={d.companyName} number={d.mobile} url={d.url} image={d.picture} />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default InsuranceCompany;