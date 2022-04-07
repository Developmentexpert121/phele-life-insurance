import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt } from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import './../../assets/styles/common.css';
import Footer from './../common/Footer';

const GettingStarted = () => {
  const NavLists = [
    {
      'heading':'Getting Started', 
      'icon' : '<FaAtlas />', 
      'url':'/getting-started'
    },
    {
      'heading':'How Claim Works',
      'icon':'FaBook',
      'url': '/how-claim-works'
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
              <span className='main-text-heading'>Getting Started with Life Insurance</span>
            </div>
            <p className='simple-text'>
              By now you probably know that you need Life Insurance before anything else. This brings us to the next step – buying Life Insurance.
            </p>
            <p className='simple-text'>
              Did this suddenly bring a whole bunch of questions in mind? How do I do that? Who do I go to? What documents do I need?
            </p>
            <p className='simple-text'>
              Worry not. On a broad perspective, buying Life Insurance actually has a very simple process involved.
              Let us take you through those five simple steps to buying a Life Insurance plan.
            </p>
            <p className='sub-headings'>STEP TWO</p>
            <p className='sub-headings'>
            Decide which policy to go for.
            </p>
            <p className='simple-text'>Take your time on this one, as this one’s crucial. Depending on your need, seek relevant quotes, look at proposals, compare them to shortlist a few policies. If you can’t decide for yourself, let an advisor suggest you some. In the end, make sure you select one that suits your needs the most, and not the one which seems the cheapest.</p>
            <p className='sub-headings'>STEP THREE</p>
            <p className='sub-headings'>
            Get familiar with your chosen policy.
            </p>
            <p>Once you have a policy decided upon, get acquainted with all the information about it, so that you are well informed. Know the key features and benefits, the amount of premium involved, the date the policy gets active, the policy and payment term, the coverage amount, death and maturity payouts, policy exclusions. Also, check if you need any add-ons to your policy, etc. If you have even the slightest doubt about something, don’t shy away from asking more questions.</p>
            <p className='sub-headings'>STEP FOUR</p>
            <p className='sub-headings'>
            Fill in your application
            </p>
            <p className='simple-text'>Now that you are well aware of the policy you have chosen, it’s time for you to fill in your application. Note: No matter how trusted your source is, don’t ever sign a blank proposal and have them fill information later. Make sure you read your application carefully, and ask any questions you might have before you sign it.</p>
            <p className='simple-text'>Before you fill in your application, here are some things you can keep handy:</p>
            <p className='simple-text'>-    Your personal health and family history - any reports of your current and past medical diagnosis (if any), general lifestyle, smoking habits, etc.</p>
            <p className='simple-text'>-    Authentic address, age and identity proof</p>
            <p className='simple-text'>-    Where your payment is going to be delivered; ensure it is to the insurance company and not to the individual agent you might be taking advice from.</p>
            <p className='sub-headings'>STEP FIVE</p>
            <p className='sub-headings'>
            Accept your policy
            </p>
            <p className='simple-headings'>Once you send in your application, it will be sent for review; this usually takes a couple of weeks. Once your policy is accepted by the insurance company, and you have your policy document in hand, make sure to re-check the following:</p>
            <ul>
              <li>Check for errors, omissions and exclusions</li>
              <li>Check if your personal details have been correctly captured</li>
              <li>Understand the claim process thoroughly, so you are well prepared beforehand</li>
            </ul>
            <p className='simple-text'>Don’t worry if you don’t understand or find any errors at this stage. Once you have bought a policy, you will have the first 15 days to get comfortable with it, make changes to it and if the need arises, change it completely or request a refund. This is what we call the free-look period.</p>
            <p className='simple-text'>Once you accept a policy that best suits your needs, keep your policy document safe and stay invested for the entirety of the policy term to get the most of its benefits.</p>
            <p className='simple-text'>Oh, don’t forget to tell your loved ones about the policy you just bought so they are well aware too.
            <br />
              There you go! You’re all set. Hope this was helpful.
              </p>
          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default GettingStarted