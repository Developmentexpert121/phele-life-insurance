import React from 'react'
import SocialComponent from '../common/Socials';
import {Container, Row, Col} from 'react-bootstrap';
import {FaShieldAlt}  from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import Navs from '../SideTabs';
import FaqToggle from './../FaqToggle';
import Footer from './../common/Footer';
const Faq = () => {
  const NavLists = [
    {
      'heading':'what is Life Insurance', 
      'icon' : '<FaAtlas />', 
      'url':'/what-is-life-lnsurance'
    },
    {
      'heading':'Who is it for',
      'icon':'FaBook',
      'url': '/who-needs-life-insurance'
    },
    {
      'heading':'Commonly Asked Question',
      'icon':'FaBook',
      'url': '/faq'
    }
  ]
  let data = [{"question":"What is Your name?", "answer":"Hi! My name is Puneet Dudi"},{"question":"How old are you?", "answer":"I'm 24 years old"}];
  const bannerStyle = {
    width: '100%',
    border: 1   
  }
  return (
    <>
    <Container>
      <Row>
      <Col xs={12} md={3} lg={3} className="sidenav-box">
      {NavLists.map((d) =>
          <Navs heading={d.heading} icon={d.icon} url= {d.url} />
        )}
         </Col>
        <Col xs={12} md={9} lg={9}>
          {data.map((s) =>
          <FaqToggle question = {s.question} answer={s.answer} />
          )}
          
        </Col>
      </Row>
      < SocialComponent />
    </Container>
    <Footer />
    </>
  )
}

export default Faq