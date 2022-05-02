import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
const CompaniesLibrary = (props) => {
    return (
        // <>
        // <Col xs={6} md={6} lg={6} className="librarybox">
        //     <div className='sublibrary-box'>
        //     <div className='companyImage'>
        //         <img src={props.image} />
        //     </div>
        //     <div className='imagedata'>
        //     <p>{props.name}</p>
        //     <p>{props.number}</p>
        //     <p>{props.url}</p>
        //     </div>
        //     </div>
        // </Col>
        // </>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.number}
                </Card.Text>
                <Button variant="primary">{props.url}</Button>
            </Card.Body>
        </Card>
    )
}

export default CompaniesLibrary;