import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header'

const About = () => {
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
              <span className='main-text-heading heading-margin'>About IRDAI</span>
            </div>
            <p className='simple-text pt-2'>
              Insurance Regulatory and Development Authority (IRDAI) regulates the Indian insurance industry to protect the interests of the policyholders and work for the orderly growth of the industry.
            </p>
            <p className='simple-text'>
              The IRDA Act, 1999 spells out the Mission of IRDAI as: “... to protect the interests of the policyholders, to regulate, promote and ensure orderly growth of the insurance industry and for matters connected therewith or incidental thereto......”
            </p>

            <span className='sub-headings pt-4 pb-2'>Birth of IRDAI</span>
            <ul>
              <li className='simple-text' > The Insurance Regulatory and Development Authority (IRDA) was set up as an autonomous body under the IRDA Act, 1999. </li>
              <li className='simple-text' > The IRDAI's mission is to protect the interests of policyholders, to regulate, promote and ensure orderly growth of the insurance industry and for matters connected therewith or incidental thereto. </li>
            </ul>

            <span className='sub-headings pt-4 pb-2'>Background</span>
            <ul>
              <li className='simple-text' > 1991: Government of India begins the economic reforms programme and financial sector reforms</li>
              <li className='simple-text' > 1993: Committee on Reforms in the Insurance Sector, headed by Mr. R. N. Malhotra, (Retired Governor, Reserve Bank of India) set up to recommend reforms.</li>
              <li className='simple-text' > 1994: The Malhotra Committee recommends certain reforms having studied the sector and hearing out the stakeholders</li>
              <li className='simple-text' > Some recommended reforms
                <ul>
                  <li className='simple-text' > Private sector companies should be allowed to promote insurance companies</li>
                  <li className='simple-text' > Foreign promoters should also be allowed</li>
                  <li className='simple-text' > Government to vest its regulatory powers on an independent regulatory body answerable to Parliament</li>
                </ul>
              </li>
            </ul>

            <span className='sub-headings pt-4 pb-2'>IRDAI's Activities</span>
            <ul>
              <li className='simple-text' > Frames regulations for insurance industry in terms of Section 114A of the Insurance Act, 1938</li>
              <li className='simple-text' > From the year 2000 has registered new insurance companies in accordance with regulations</li>
              <li className='simple-text' > Monitors insurance sector activities for healthy development of the industry and protection of policyholders' interests</li>
            </ul>
            <span className='sub-headings pt-4 pb-2'> Functions and Duties of IRDAI </span>
            <p className='simple-text'> Section 14 of the IRDA Act, 1999 lays down the duties, powers and functions of the IRDAI.</p>
            <ul>
              <li className='simple-text' > Registering and regulating insurance companies</li>
              <li className='simple-text' > Ptotecting policyholders’ interests</li>
              <li className='simple-text' > Licensing and establishing norms for insurance intermediaries</li>
              <li className='simple-text' > Promoting professional organisations in insurance</li>
              <li className='simple-text' > Regulating and overseeing premium rates and terms of non-life insurance covers</li>
              <li className='simple-text' > Specifying financial reporting norms of insurance companies</li>
              <li className='simple-text' > Regulating investment of policyholders’ funds by insurance companies</li>
              <li className='simple-text' > Ensuring the maintenance of solvency margin by insurance companies</li>
              <li className='simple-text' > Ensuring insurance coverage in rural areas and of vulnerable sections of society</li>
            </ul>
          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default About