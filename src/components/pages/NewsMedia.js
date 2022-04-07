import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {FaShieldAlt}  from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import NewsComponent from '../NewsComponent';

const NewsMedia = () => {
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
  const News = [
    {
      "title" : 'Will ‘Sabse Pehle Life Insurance’ make a mark?',
      'date' : '14/10/19',
      'source' :'Hindustan Times',
      'description' :'You contribute just as much as a man to the running of a household and this cannot be ignored. This being said, it is women who seem to be undecided about taking up a life insurance policy.'
    },
    {
      "title" : 'Will ‘Sabse Pehle Life Insurance’ make a mark?',
      'date' : '14/10/19',
      'source' :'Hindustan Times',
      'description' :'You contribute just as much as a man to the running of a household and this cannot be ignored. This being said, it is women who seem to be undecided about taking up a life insurance policy.'
    },
    {
      "title" : 'Will ‘Sabse Pehle Life Insurance’ make a mark?',
      'date' : '14/10/19',
      'source' :'Hindustan Times',
      'description' :'You contribute just as much as a man to the running of a household and this cannot be ignored. This being said, it is women who seem to be undecided about taking up a life insurance policy.'
    }
  ]
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
          <div>
            <span className='main-text-heading'>News & Media</span>
          </div>
          {News.map((d) =>
            <NewsComponent title={d.title} date = {d.date} source = {d.source} description={d.description} />
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