import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

export default function HomeTable() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={2} md={2} lg={2} ></Col>

                    <Col xs={3} md={3} lg={3} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }} >
                        <div className='text-blue' style={{ height: '90px', width: "300px", backgroundColor: "white", justifyContent: 'center', textAlign: "center" }}>
                            dcodpkm
                        </div>
                        <div style={{ height: '90px', width: "300px", backgroundColor: "#adadd9", textAlign: "center" }}>
                            dcodpkm
                        </div>
                        <div style={{ height: '90px', width: "300px", backgroundColor: "#adadd9", textAlign: "center" }}>
                            dcodpkm
                        </div>
                        <div style={{ height: '90px', width: "300px", backgroundColor: "#adadd9", textAlign: "center" }}>
                            dcodpkm
                        </div>
                    </Col>
                    <Col xs={5} md={5} lg={5}>
                        <div style={{ height: '180px', width: "640px", backgroundColor: "#adadd9", padding: '180px' }}>
                            bjbb

                        </div>

                    </Col>
                    <Col xs={2} md={2} lg={2}></Col>
                </Row>
            </Container>
        </>
    )
}
