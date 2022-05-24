import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt } from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
const LifeInsuranceCouncil = () => {
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
            {NavLists.map((d) =>
              <Navs heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div>
              <span className='main-text-heading heading-margin'>About Life Insurance Council</span>
            </div>
            <span className='sub-headings pt-3 pb-2'>Who We Are </span>
            <p className='simple-text pt-2'>
              Life Insurance Council is a forum that connects the various stakeholders of the sector. It develops and coordinates all discussions between the Government, Regulatory Board and the Public. In short, it is the face of the Life Insurance industry.
            </p>
            <p className='simple-text'>
              Constituted under Sec.64C of Insurance Act 1938, the Life Insurance Council functions through several sub-committees and includes all life insurance companies in India. In total, there are 24 life insurers who offer a variety of traditional and new innovative products.
            </p>

            <span className='sub-headings pt-4 pb-2'>Our Objective</span>
            <p className='simple-text'>To play a significant and complementary role in transforming India's life insurance industry into a vibrant, trustworthy and profitable service, helping people in their journey to prosperity.</p>

            <span className='sub-headings pt-3 pb-2'>Our Mission</span>
            <ul>
              <li className='simple-text'>To function as an active forum to aid, advise and assist insurers in maintaining high standards of conduct and service to policyholders.</li>
              <li className='simple-text'>Interact with the Government and other bodies on policy matters.</li>
              <li className='simple-text'>Actively participate in spreading insurance awareness in India.</li>
              <li className='simple-text'>Take steps to develop education and research in insurance.</li>
              <li className='simple-text'>Help India enjoy the benefits of global practices.</li>
            </ul>
            
          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default LifeInsuranceCouncil