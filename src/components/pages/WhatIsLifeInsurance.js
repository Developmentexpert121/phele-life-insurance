import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {FaShieldAlt}  from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
const WhatIsLifeInsurance = () => {
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
            <span className='main-text-heading'>What is Life Insurance?</span>
          </div>
          <div className='what-insurance-photo pt-3'>
          <img src={Banner1} style={bannerStyle} />
          </div>
          <p className='simple-text pt-3'>
          In the simplest way possible, Life Insurance is a product that provides your family with money when you are not around to financially provide for them. It is important to consider buying Life Insurance so that you are better prepared to face life's uncertainties.
          </p>
          <span className='text-heading pt-4 pb-2'>Do I really need it?</span>
          <p className='simple-text'>Let us begin with a simple thumb rule – everyone needs Life Insurance. A life insurance policy ensures financial support for your family, assuring you of a stress-free life.</p>
          <p>Let us tell you just how important it really is to have a life insurance plan in place.</p>
          <span className='sub-headings pt-3 pb-2'>TO PROTECT AGAINST UNCERTAINTIES</span>
          <p className='simple-text '>It’s easy to get into debt, and more difficult to get out of it. Losing an earning member could bring a financial crisis on the family. To avoid getting your family into heavy debt, you can use your life insurance payouts to clear off loans such as vehicle loans, personal loans, etc.</p>
          <span className='sub-headings pt-4 pb-2'>TO ACHIEVE LIFE GOALS</span>
          <p className='simple-text'>Everyone has goals set out for their future, big or small. A Life Insurance policy helps you achieve your primary goals such as securing your children’s education, a dream house, etc. So, for people looking for something more than financial security, there are investment products available for you to create a savings pool for your family’s future.</p>
          <span className='sub-headings pt-4 pb-2'>TO SECURE A WELL RETIRED LIFE</span>
          <p className='simple-text'>Let your retirement bring you a joyful second innings. A retirement plan assures you of a regular income and zero financial stress, letting you maintain quality of life and spending every joyful moment with your family.</p>
          <p className='simple-text pt-2'>Now that you know that Life Insurance is indeed the first step to financial security, it’s time for you to get started on determining your needs and find the most suitable insurance policy for you – a policy that could eventually change your loved one’s life for better.</p>
        </Col>
      </Row>
      < SocialComponent />
    </Container>
    <Footer />
    </>
  )
}

export default WhatIsLifeInsurance