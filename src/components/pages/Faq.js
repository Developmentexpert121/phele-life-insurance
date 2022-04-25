import React, { useState, useEffect } from 'react'
import SocialComponent from '../common/Socials';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt } from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import Navs from '../SideTabs';
import FaqToggle from './../FaqToggle';
import Footer from './../common/Footer';
import Header from './../common/Header';
const Faq = () => {

  const [question, fetchQuestion] = useState([])

  const getQuestions = () => {
    fetch('http://localhost:4000/faqs/question'
    )
      .then((res) => res.json())
      .then((res) => {
        fetchQuestion(res)
      })

  }
  // const [as, fetchas] = useState([])
  // const asd = () =>{

  //   const url = "https://coderbyte.com/api/challenges/json/age-counting";

  //   fetch(url, {
  //       method : "GET",
  //       mode: 'opaque'
  //   })
  //   // fetch('https://coderbyte.com/api/challenges/json/age-counting' , {
  //   //   mode: "no-cors",
  //   // })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       fetchas(res)
  //     })

  //     console.log("as ia ", as);
  // }
  // useEffect(() => {
  //   asd()
  //   console.log('effect 2', as);
  // }, [])

  useEffect(() => {
    getQuestions()
    console.log('effect 1', question);
  }, [])

  const NavLists = [
    {
      'heading': 'what is Life Insurance',
      'icon': '<FaAtlas />',
      'url': '/what-is-life-lnsurance'
    },
    {
      'heading': 'Who is it for',
      'icon': 'FaBook',
      'url': '/who-needs-life-insurance'
    },
    {
      'heading': 'Commonly Asked Question',
      'icon': 'FaBook',
      'url': '/faq'
    }
  ]
  let data = [{ "question": "What is Your name?", "answer": "Hi! My name is Puneet Dudi" }, { "question": "How old are you?", "answer": "I'm 24 years old" }];
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
            {NavLists.map((d, index) =>
              <Navs key={index} heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col xs={12} md={9} lg={9}>
            {question.map((s, index) =>
              <FaqToggle key={index} question={s.question} answer={s.answer} />
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