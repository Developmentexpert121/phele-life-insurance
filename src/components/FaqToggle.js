import React, {useState} from 'react';
import {Row, Col, Collapse, Button } from 'react-bootstrap';

const FaqToggle = (props) => {
    const [open, setOpen] = useState(false);
    return(
        <div className='faq-ful-box'>
        <Row className='faq-sub-box'>
        <Col xs={12} md={12} lg={12} className='faq-question-box'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       {props.question}
        </Col>
        <Collapse in={open}>
        <div id="example-collapse-text" className='faq-answer-box'>
          {props.answer}
        </div>
      </Collapse>
      </Row>
      
        </div >
    )
}

export default FaqToggle;