import React, { useState, useEffect } from 'react'
import AdminHeader from '../layout/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const AdminFaq = () => {
    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    })
    const [thearray, setTheArray] = useState([]);

    const InputHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        console.log(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        var data = { question: formData.question, answer: formData.answer }
        fetch(`http://localhost:4000/faqs/question`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        
    }
    const GetQuetion = () => {
        fetch('http://localhost:4000/faqs/question'
        )
            .then((res) => res.json())
            .then((res) => {
                setTheArray(res)
            })
    }
    useEffect(() => {
        GetQuetion()
    })
    return (
        <>
            < AdminHeader />
            <div className='content-here'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Add Faqs</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onSubmit={submit}>
                                <div xs={12} md={6} lg={6}>
                                    <label>Question</label>
                                    <input
                                        type="text"
                                        name="question"
                                        className="form-control"
                                        onChange={InputHandler}
                                        value={setFormData.question}
                                    />
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Answer</label>
                                    <textarea
                                        name='answer'
                                        row="4" col="50" placeholder='Enter Answer'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={setFormData.answer}
                                    >
                                    </textarea>
                                </div>
                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col >Question</Col>
                        <Col xs={6} md={6} lg={7}>Answer</Col>
                        <Col>Edit</Col>
                        <Col>Delete</Col>
                    </Row>
                    {thearray.map((item, index) =>
                        <Row key={index} className='library-main-box p-1 align-items-center'>
                            <Col>{item.question}</Col>
                            <Col xs={6} md={6} lg={7}>{item.answer})</Col>
                            <Col>< FaEdit /></Col>
                            <Col>< FaTrashAlt /></Col>
                        </Row>
                    )}
                    <Row>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AdminFaq