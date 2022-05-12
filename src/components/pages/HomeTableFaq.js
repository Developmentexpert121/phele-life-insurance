import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { RiArrowRightSLine } from "react-icons/ri";

export default function HomeTable() {

    const [faqs, setFaqs] = useState([])
    const [textOnClick, SetTextOnClick] = useState("There are several ways your employer-provided policy may not be enough for you. Some of them could be inadequate coverage for you and your family, a job change leading to loss of coverage, etc.")
    const [link, activeLink] = useState("");

    const handleClick = id => {
        activeLink(id)

    };

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
            <Container className="box-shadow">
                <Row>
                    {/* <Col xs={2} md={2} lg={2} ></Col> */}

                    <Col xs={3} md={3} lg={3} >
                        {faqs.map((faq, i) =>
                            <div key={i} value={faq.question} className={`ps-2 ${i !== link ? 'text-blue textOnHover':"" } ${i === link ? "activeClass" : ""} `} onClick={() => {SetTextOnClick(faq.answer); handleClick(i); }} style={{ height: '65px', width: "300px", justifyContent: 'center'}}>
                                <h6>{faq.question} <RiArrowRightSLine /></h6>
                            </div>
                        )}

                    </Col>
                    <Col xs={5} md={5} lg={5} style={{ height: '270px', width: "730px", backgroundColor: "#fff", padding: '36px 40px' }}>
                        <p className='simple-text' > {textOnClick}</p>
                    </Col>
                    {/* <Col xs={2} md={2} lg={2}></Col> */}
                </Row>
            </Container>
        </>
    )
}
