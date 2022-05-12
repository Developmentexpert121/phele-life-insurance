import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { IoMdCloseCircleOutline } from 'react-icons/io';
const CompaniesLibrary = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Container>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>

                    {/* <Card.Title>{props.name}</Card.Title> */}
                    <h6 style={{ color: "#284287",textAlign:"center" }} >{props.name}</h6>
                    <Card.Text style={{textAlign:"center"}} > 
                        {props.number}
                    </Card.Text>
                    <a style={{ textDecoration: 'none', textAlign:'center' }}
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