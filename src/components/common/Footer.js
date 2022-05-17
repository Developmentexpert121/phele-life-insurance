import React from 'react';
import FooterLogo from './../../assets/footer-logo.jpg';
import {Row, Col} from  "react-bootstrap";
const Footer = () => {
  return (
    <div className="Footer-main">
      <Row className="Footer-row">
        <Col xs={12} md={2} lg={2}>
        <img src={FooterLogo} />
        </Col>
        <Col xs={12} md={10} lg={10} className="reserved-rights">
          <span className='text-reserved'>© 2020 Life Insurance Council. All Rights Reserved.</span>
        </Col>
      </Row>
    </div>
  )
  
}

export default Footer