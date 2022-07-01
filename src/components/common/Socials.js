import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaQuora, FaLinkedin } from 'react-icons/fa';
import { Row, Col } from "react-bootstrap";
const SocialComponent = () => {
  return (
    <Row className='py-lg-4'>
      <Col xs={12} md={12} lg={12} className="homeTrending">
        <a rel="noreferrer" href='https://www.facebook.com/sabsepehlelifeinsurance/' target="_blank" > <FaFacebook className="social-icon" /></a>
        <a rel="noreferrer" href='https://www.instagram.com/sabsepehle_lifeinsurance/' target="_blank" ><FaInstagram className="social-icon" /></a>
        <a rel="noreferrer" href='https://twitter.com/Sabsepehlelife' target="_blank" >< FaTwitter className="social-icon" /></a>
        <a rel="noreferrer" href='https://www.youtube.com/channel/UC4RQmexaBgbk7sifICdYKPQ' target="_blank" >< FaYoutube className="social-icon" /></a>
        <a rel="noreferrer" href='https://www.quora.com/profile/Sabse-Pehle-Life-Insurance' target="_blank" >< FaQuora className="social-icon" /></a>
        <a rel="noreferrer" href='https://www.linkedin.com/groups/10491612/' target="_blank" >< FaLinkedin className="social-icon" /></a>
      </Col>
    </Row >
  )
}


export default SocialComponent;