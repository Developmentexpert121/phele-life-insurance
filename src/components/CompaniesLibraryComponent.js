import React from 'react'
import { Card, Container } from 'react-bootstrap'
// import { IoMdCloseCircleOutline } from 'react-icons/io';
const CompaniesLibrary = (props) => {
    return (
        <Card style={{ width: '18rem',overflow:"scroll" }}>
            <Container>
                {/* <Card.Img style={{ width: '18rem', height: "80px" }} variant="top" src={props.image} /> */}

                <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
                    <Card.Img style={{ width: '18rem', height: "80px" }} variant="top" src={props.image} />

                    {/* <Card.Title>{props.name}</Card.Title> */}
                    <h6 className='mt-3' style={{ color: "#284287", height: "40px" }} >{props.name}</h6>
                    <Card.Text className='mt-1' style={{ textAlign: "center" }} >
                        {props.number}
                    </Card.Text>
                    <a style={{ textDecoration: 'none' }}
                        href={props.url.startsWith("https://") ? props.url : `https://${props.url}`}
                        target='_blank' >
                        {props.url}
                    </a>

                    {/* <Button variant="primary">{props.url}</Button> */}
                </Card.Body>
            </Container>
        </Card>
    )
}

export default CompaniesLibrary;