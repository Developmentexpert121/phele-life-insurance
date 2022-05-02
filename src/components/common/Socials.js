import React from 'react'
import {FaFacebookF , FaInstagram, FaTwitter,FaYoutube,FaQuora, FaLinkedin} from 'react-icons/fa';
import { Row, Col } from "react-bootstrap";
const SocialComponent = () => {
    return (
        <Row className='py-lg-4'>
          <Col xs={12} md={12} lg={12} className="homeTrending">
         <FaFacebookF className="social-icon" />
         <FaInstagram className="social-icon" />
         < FaTwitter className="social-icon" />
         < FaYoutube className="social-icon" />
         < FaQuora className="social-icon" />
         < FaLinkedin className="social-icon" />
          </Col>
        </Row>
    )
}


export default SocialComponent;