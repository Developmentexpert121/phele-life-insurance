import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaShieldAlt,FaAtlas, FaBook}  from 'react-icons/fa';
const Navs = (props) => {
  
  const iconStyle = {
    fontSize : '28px',
    fontWeight : '700',
    color : '#06a996',
    padding:'0 15px 15px 15px'
  }
  const textStyle = {
    fontSize : '16px',
    fontWeight : '700',
    color : '#3d3d3d',
    marginTop : "10px"
  }
    return(
          <div>
            <Link to={props.url} style={{textDecoration:'none'}}>
            <Row className='side-tab-box'>
            <Col style={iconStyle} xs={3} md={2} lg={2} >< FaBook /></Col>
            <Col xs={9} md={10} lg={10} style={textStyle}><span className='side-nav-text'>{props.heading}</span></Col> 
            </Row>
            </Link>
          </div>
    );
}

export default Navs;