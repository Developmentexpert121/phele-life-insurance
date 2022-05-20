import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
// import { FaShareAlt } from 'react-icons/fa';
// import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
// import { FacebookIcon, FacebookShareButton } from "react-share";
import ShareIcon from "../../ShareIcon"


const InsuranceLibrary = () => {
  const [question, fetchQuestion] = useState([]);
  // const [show, setShow] = useState(false);
  // const target = useRef(null);


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

  // const bannerStyle = {
  //   width: '100%',
  //   border: 1
  // }
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
              <span className='main-text-heading'>Insurance Library</span>
            </div>
            {question.map((element, index) =>
              <Row key={index} className='library-main-box shadow px-2 py-3 align-items-center'>
                <Col xs={4} md={4} lg={3} className="library-image">
                  <img src={element.picture} alt="Banner" />
                </Col>
                <Col col={8} md={8} lg={9}>

                  <div className='d-flex flex-wrap justify-content-between text-blue'><div><h5 className='mb-0'>{element.title} <ShareIcon title={element.title}/> </h5> <small className='d-block'>04/12/19</small></div>
                    {/* <Button ref={target} > Click me to see </Button> */}
                  </div>

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