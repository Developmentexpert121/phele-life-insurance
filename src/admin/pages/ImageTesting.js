import React, { useState, useEffect } from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

export default function ImageTesting() {
    const [newUser, setNewUser] = useState("");

    const onInputChange = (e) => {
        setNewUser(e.target.files[0])
        console.log("New user",newUser);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', newUser);
        console.log("image data is", newUser);

        axios.post('//localhost:4000/library/library', formData)
            .then((e) => {
                console.log("Sucess",e);
            })
            .catch((err) => {
                console.log('Error is', err);
            })
    }

    return (
        <>
            <AdminHeader />
            <div className='content-here'>
                <Container>
                    <Row>
                        <Col>
                            <form onSubmit={onSubmit}>
                                <Row>
                                    <Col xs={12} md={6} lg={6}>
                                        <label>Company Logo</label>
                                        <input
                                            type="file"
                                            name="companyLogo"
                                            className="form-control"
                                            onChange={onInputChange} />
                                    </Col>
                                </Row>
                                <Col>
                                    <button className='btn btn-primary m-2' >Submit</button>
                                </Col>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
