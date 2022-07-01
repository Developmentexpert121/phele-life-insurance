import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from 'react-bootstrap';
const url = process.env.REACT_APP_URL

export default function HomeTable() {

    const [faqs, setFaqs] = useState([])
    const [textOnClick, SetTextOnClick] = useState("There are several ways your employer-provided policy may not be enough for you. Some of them could be inadequate coverage for you and your family, a job change leading to loss of coverage, etc.")
    const [link, activeLink] = useState("");

    const handleClick = id => {
        activeLink(id)
    };

    useEffect(() => {
        fetch(url+'/faqs/question'
        )
            .then((res) => res.json())
            .then((res) => {
                setFaqs(res.slice(0, 4))
            })

    }, [faqs])

    return (
        <>
            <Container className="box-shadow">
                <Row>
                    <Col xs={12} md={10} lg={3} >
                        <Accordion>
                            {faqs.map((faq, i) =>
                                <>
                                    <Accordion.Item key={i} eventKey={i}>
                                        <Accordion.Header onClick={() => { SetTextOnClick(faq.answer); handleClick(i); }} className={`ps-2 ${i !== link ? 'text-blue textOnHover' : ""} ${i === link ? "activeClass" : ""} `} >
                                            <span key={i} value={faq.question} style={{ height: '65px', width: "300px", justifyContent: 'center' }}>
                                                <h6>{faq.question} </h6>
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body className='show-col'>
                                            <span  >
                                                <p className='simple-text' > {faq.answer}</p>
                                            </span>
                                        </Accordion.Body>

                                    </Accordion.Item>
                                </>

                            )}
                        </Accordion>

                    </Col>
                    <Col className='hide-col' xs={12} md={12} lg={5} style={{ height: '270px', width: "730px", backgroundColor: "#fff", padding: '36px 40px' }}>
                        <p className='simple-text' > {textOnClick}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
