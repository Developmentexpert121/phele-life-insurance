import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaBook}  from 'react-icons/fa';
const Navs = (props) => {
  
  
  const iconStyle = {
    fontSize : '28px',
    fontWeight : '700',
    color : '#06a996',
    padding:'0px 0px 0px 15px',
    width: '45px',
    lineHeight: '1'
  }
  const textStyle = {
    fontSize : '16px',
    fontWeight : '700',
    color : '#3d3d3d',
    marginTop : "10px",
    width: 'calc(100% - 45px)',
    Transition: 'all .3s ease'
  }
    return(
          <div>
            <Link to={props.url} style={{textDecoration:'none', display:'block'}}>
            <Row className='side-tab-box align-items-center py-3'>
            <Col style={iconStyle} xs={3} md={2} lg={2} >< FaBook /></Col>
            <Col xs={9} md={10} lg={10} style={textStyle} className="mt-0"><span className='side-nav-text'>{props.heading}</span></Col> 
            </Row>
            </Link>
          </div>
    );
}

export default Navs;