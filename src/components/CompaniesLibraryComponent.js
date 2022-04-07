import React from 'react'
import {Row, Col} from 'react-bootstrap'
const CompaniesLibrary = (props) => {
    return(
        <>
        <Col xs={6} md={6} lg={6} className="librarybox">
            <div className='sublibrary-box'>
            <div className='companyImage'>
                <img src={props.image} />
            </div>
            <div className='imagedata'>
            <p>{props.name}</p>
            <p>{props.number}</p>
            <p>{props.url}</p>
            </div>
            </div>
        </Col>
        </>
    )
}

export default CompaniesLibrary;