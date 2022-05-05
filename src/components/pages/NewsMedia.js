import React,{useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
// import {FaShieldAlt}  from 'react-icons/fa';
// import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
import NewsComponent from '../NewsComponent';

const NewsMedia = () => {
  const [question, fetchQuestion] = useState([])
  const getQuestions = () => {
    fetch('http://localhost:4000/news/news'
    )
      .then((res) => res.json())
      .then((res) => {
        fetchQuestion(res)
      })

  }
  useEffect(() => {
    getQuestions()
    // console.log('effect 1', question);
  }, [question])
  const NavLists = [
    {
      'heading':'About IRDAI', 
      'icon' : '<FaAtlas />', 
      'url':'/about'
    },
    {
      'heading':'About Life Insurance Council',
      'icon':'FaBook',
      'url': '/about-life-insurance-council'
    },
    {
      'heading':'Life Insurance Companies',
      'icon':'FaBook',
      'url': '/insurance-companies'
    },
    {
      'heading':'News & Media',
      'icon':'FaBook',
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
          <Navs heading={d.heading} icon={d.icon} url= {d.url} />
        )}
         </Col>
        <Col xs={12} md={9} lg={9}>
          <div className='mb-4'>
            <span className='main-text-heading'>News & Media</span>
          </div>
          {question.map((d) =>
          <>
            
            <NewsComponent title={d.headline} date = {d.date} source = {d.source} description={d.detail} />
            </>
          )}
         
        </Col>
      </Row>
      < SocialComponent />
    </Container>
    <Footer />
    </>
  )
}

export default NewsMedia