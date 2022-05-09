import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"

export default function HomeTable() {

    const [keywords, setKeywords] = useState([])
    const [textOnClick, SetTextOnClick] = useState("An effective date is the specific date that an insurance policy becomes active.")

    useEffect(() => {
        fetch('http://localhost:4000/glossary/keyword'
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
                    {/* <Col xs={2} md={2} lg={2} ></Col> */}

                    <Col className='activeDiv' xs={3} md={3} lg={3} >
                        {keywords.map((keyword, i) =>
                            <div key={i} value={keyword.keyword} className='text-blue textOnHover' onClick={() => SetTextOnClick(keyword.definition)} style={{ height: '65px', width: "300px", backgroundColor: "white", justifyContent: 'center',  }}>
                                <h6 className='Nav-heading' >{keyword.keyword}</h6>
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
