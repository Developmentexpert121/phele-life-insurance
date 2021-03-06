import React, { useEffect, useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';

const url = window.location.pathname
// console.log("url is ",url);

export default function DynamicLibrary() {

  const [keywords, setKeywords] = useState([]);


  const getKeyword = () => {
    fetch(url+'/library'+url
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
              <span className='main-text-heading heading-margin'>{keywords.title} </span>
              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: keywords.description }}
                />
              </div>
              {/* <Button onClick={() => { console.log(result, "result 0"); }} > Console </Button> */}

            </div>

          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

