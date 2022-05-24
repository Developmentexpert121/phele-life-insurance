import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
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

  // const alphabets = [...Array(26).keys()].map(i => String.fromCharCode(i + 97).toUpperCase());
  const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const data = keywords.reduce((r, e) => {

    // get first letter of name of current element
    const alphabet = e.keyword[0];

    // if there is no property in accumulator with this letter create it
    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }

    // if there is push current element to children array for that letter
    else r[alphabet].record.push(e);

    // return accumulator
    return r;
  }, {});

  const result = Object.values(data);

  let alphalinks = []
  for (let i = 0; i < result.length; i++) {
    alphalinks.push(result[i].alphabet)
  }

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
              <span className='main-text-heading heading-margin'>Glossary</span>
              <p>Cant keep up with all the terminologies? Here's a handy guide to all the words you might come across when learning about Life Insurance.</p>
              {/* <Button onClick={() => { console.log(result, "result 0"); }} > Console </Button> */}

            </div>

            <Row >
              <h5 style={{ color: "#0b408a" }} >MOST SEARCHED</h5>
              <Row style={{ color: '#078bd1', fontWeight: 500 }} >
                <Col>BENEFICIARY</Col>
                <Col>DEATH BENEFIT</Col>
                <Col>EFFECTIVE DATE</Col>
                <Col>FREE-LOOK PERIOD</Col>
              </Row>
              <Row style={{ color: "#078bd1", fontWeight: 500 }} >
                <Col>INSURABLE INTEREST </Col>
                <Col>LAPSE</Col>
                <Col>NOMINEE</Col>
                <Col>POLICY ANNIVERSARY</Col>
              </Row>
            </Row>
            <Row className='mb-3' >
              {
                alphabets.map((alphabet, i) =>
                  <Col key={i} >
                    <a onClick={(e) => { console.log("clicked ", e.target.innerHTML); }} style={alphalinks.includes(alphabet)?{textDecoration: "none"} : {pointerEvents: "none",textDecoration: "none",color:'#9493a8'}} href={ alphalinks.includes(alphabet) ?`#${alphabet}` : "/" } >
                      {alphabet}
                    </a>
                  </Col>
                )
              }
            </Row>

            <div style={{ height: "600px", overflow: "scroll", width: "100%" }}>        {/*    Scrollable div    */}

              <Col xs={12} md={12} lg={12}>
                {result.sort((a, b) => (a.alphabet > b.alphabet) ? 1 : -1).map((element, index) =>
                  <div key={index} className="p-2">
                    <h5 id={element.alphabet} >{element.alphabet}</h5>
                    {
                      element.record.map((e, i) =>                                                        //   Map on Record
                        <Row key={i} className='library-main-box shadow px-2 py-2 align-items-center'>
                          <Col key={i} col={12} md={12} lg={12}>
                            <div className='d-flex flex-wrap justify-content-between'><div>
                              <h5 className='mb-0'  >{e.keyword} </h5>
                            </div>
                            </div>
                            <p className='mb-0 mt-3'> {e.definition} </p>
                          </Col>
                        </Row>
                      )
                    }
                  </div>
                )}

              </Col>
            </div>

            {/* <Col xs={12} md={12} lg={12}>
              {keywords.sort((a, b) => (a.keyword > b.keyword) ? 1 : -1).map((element, index) =>
                <Row key={index} className='library-main-box shadow px-2 py-3 align-items-center'>

                  <Col col={12} md={12} lg={12}>
                    <div className='d-flex flex-wrap justify-content-between'><div>
                      <h5 className='mb-0'  >{element.keyword} </h5>
                    </div>
                    </div>
                    <p className='mb-0 mt-3'> {element.definition} </p>
                  </Col>
                </Row>
              )}

            </Col> */}

          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default Glossary