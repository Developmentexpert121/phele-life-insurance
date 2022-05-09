import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"

export default function HomeTable() {

    const [faqs, setFaqs] = useState([])
    const [textOnClick, SetTextOnClick] = useState("There are several ways your employer-provided policy may not be enough for you. Some of them could be inadequate coverage for you and your family, a job change leading to loss of coverage, etc.")

    useEffect(() => {
        fetch('http://localhost:4000/faqs/question'
        )
            .then((res) => res.json())
            .then((res) => {
                setFaqs(res.slice(0, 4))
            })

    }, [faqs])

    return (
        <>
            <Container>
                <Row>
                    <Col xs={2} md={2} lg={2} ></Col>

                    <Col className='activeDiv' xs={3} md={3} lg={3} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                        {faqs.map((faq, i) =>
                            <div key={i} value={faq.question} className='text-blue textOnHover' onClick={() => SetTextOnClick(faq.answer)} style={{ height: '90px', width: "300px", backgroundColor: "white", justifyContent: 'center', textAlign: "center" }}>
                                <h6>{faq.question}</h6>
                            </div>
                        )}

                    </Col>
                    <Col xs={5} md={5} lg={5} style={{ height: '270px', width: "730px", backgroundColor: "#E3DEED", padding: '50px 40px' }}>
                        <p className='simple-text' > {textOnClick}</p>
                    </Col>
                    <Col xs={2} md={2} lg={2}></Col>
                </Row>
            </Container>
        </>
    )
}
