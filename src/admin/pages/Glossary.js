import React, { useState, useEffect } from 'react'
import AdminHeader from '../layout/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const Glossary = () => {
    const [formData, setFormData] = useState({
        keyword: '',
        definition: ''
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
        var data = { keyword: formData.keyword, definition: formData.definition }
        fetch(`http://localhost:4000/glossary/keyword`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

    }
    const GetKeyword = () => {
        fetch('http://localhost:4000/glossary/keyword'
        )
            .then((res) => res.json())
            .then((res) => {
                setTheArray(res)
            })
    }
    useEffect(() => {
        GetKeyword()
    })
    return (
        <>
            < AdminHeader />
            <div className='content-here'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Add Glossary</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onSubmit={submit}>
                                <div xs={12} md={6} lg={6}>
                                    <label>Keyword</label>
                                    <input
                                        type="text"
                                        name="keyword"
                                        className="form-control"
                                        onChange={InputHandler}
                                        value={setFormData.keyword}
                                    />
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Define Keyword</label>
                                    <textarea
                                        name='definition'
                                        row="4" col="50" placeholder='Enter Answer'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={setFormData.definition}
                                    >
                                    </textarea>
                                </div>
                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <table>
                            <thead>
                                <tr>
                                    <th>Keyword</th>
                                    <th>Definition</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {thearray.map((item, index) => (
                                    <tr key={index} >
                                        <td>{item.keyword}</td>
                                        <td>{item.definition}</td>
                                        <td>< FaEdit /></td>
                                        <td><FaTrashAlt /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Glossary;