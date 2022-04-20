import React from 'react'
import {Row, Col} from 'react-bootstrap';

const NewsComponent = (props) => {

    const date_source = {
        lineHeight: '9px',
        fontSize: '12px'
    }

    return(
        <div>
            <Row className='news-box'>
                <Col xs={12} md={12} lg={12} className='news-sub-box'>
                    <p className='news-heading' style={{'margin-bottom' : "5px"}}>{props.title}</p>
                    <p className='date-source' style={date_source}>{props.date} - <strong>Source :</strong> {props.source}</p>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </div>
    )
}

export default NewsComponent;