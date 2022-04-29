import React, { useState, useEffect } from 'react'
import AdminHeader from '../layout/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import axios from "axios"

const AdminFaq = () => {
    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    })
    const [thearray, setTheArray] = useState([]);
    const [editing, setEditing] = useState(false);

    const InputHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

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
    }, [thearray])

    const editFaq = (id) => {
         axios.get('http://localhost:4000/faqs/editfaqs/' + id)
            .then((res) => {
                console.log('edit faq', res.data.question)
                setFormData({
                    question: res.data.question,
                    answer: res.data.answer
                })
                console.log("formData  is 2", formData);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteFaq = (id) => {
        axios.get('http://localhost:4000/faqs/deletefaqs/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                                        value={formData.question}
                                    />
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Answer</label>
                                    <textarea
                                        name='answer'
                                        row="4" col="50" placeholder='Enter Answer'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={formData.answer}
                                    >
                                    </textarea>
                                </div>
                                <button type='submit' className='btn btn-primary m-1'>Submit</button>
                                <button type='button' onClick={() => { console.log("view ", formData) }} className='btn btn-primary m-1'>Update</button>
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
                            <Col xs={6} md={6} lg={7}>{item.answer}</Col>
                            <Col onClick={() => { editFaq(item._id); }}>< FaEdit /></Col>
                            <Col onClick={() => { deleteFaq(item._id); }} >< FaTrashAlt /></Col>
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