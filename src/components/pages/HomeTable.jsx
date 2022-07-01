import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Accordion } from 'react-bootstrap';
const url = process.env.REACT_APP_URL

export default function HomeTable() {

    const [keywords, setKeywords] = useState([])
    const [textOnClick, SetTextOnClick] = useState("An effective date is the specific date that an insurance policy becomes active.");
    const [link, activeLink] = useState("");

    const handleClick = id => {
        activeLink(id)
    };

    useEffect(() => {
        fetch(url+'/glossary/keyword'
        )
            .then((res) => res.json())
            .then((res) => {
                setKeywords(res.slice(0, 4))
            })
    }, [keywords])

    return (
        <>
            <Container className="box-shadow">
                <Row>
                    <Col xs={12} md={10} lg={3} >
                        <Accordion>
                            {keywords.map((keyword, i) =>
                                    <Accordion.Item key={i} eventKey={i}>
                                        <Accordion.Header onClick={() => { SetTextOnClick(keyword.definition); handleClick(i); }} className={`ps-2 ${i !== link ? 'text-blue textOnHover' : ""} ${i === link ? "activeClass" : ""} `}>
                                            <span key={i} value={keyword.keyword} style={{ height: '65px', width: "300px", justifyContent: 'center', }}>
                                                <h6 className='Nav-heading' >{keyword.keyword} </h6>
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body className='show-col'>
                                            <span  >
                                                <p className='simple-text' > {keyword.definition}</p>
                                            </span>
                                        </Accordion.Body>

                                    </Accordion.Item>                              
                            )}
                        </Accordion>
                    </Col>
                    <Col className='hide-col' xs={12} md={5} lg={5} style={{ height: '270px', width: "730px", backgroundColor: "#fff", padding: '36px 40px' }}>
                        <p className='simple-text' > {textOnClick}</p>
                    </Col>
                    {/* <Col xs={2} md={2} lg={2}></Col> */}
                </Row>

            </Container>
        </>
    )
}
