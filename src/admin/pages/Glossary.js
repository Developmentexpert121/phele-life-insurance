import React, { useState, useEffect } from 'react'
import AdminHeader from '../layout/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'

const Glossary = () => {
    const [formData, setFormData] = useState({
        keyword: '',
        definition: '',
        id: ''
    })
    const [thearray, setTheArray] = useState([]);

    const InputHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

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
    // const GetKeyword = () => {
    //     fetch('http://localhost:4000/glossary/keyword'
    //     )
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setTheArray(res)
    //         })
    // }
    // useEffect(() => {
    //     GetKeyword()
    // }, [thearray])

    useEffect(() => {
        let isMounted = true;               // note mutable flag

        fetch('http://localhost:4000/glossary/keyword'
        )
            .then((res) => res.json())
            .then((res) => {
                if (isMounted) setTheArray(res)
            })
        return () => { isMounted = false }; // cleanup toggles value, if unmounted
    }, [thearray]);

    const deleteKeyword = (id) => {
        console.log('inside delete', id);
        axios.get('http://localhost:4000/glossary/deleteglossary/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const editKeyword = async (id) => {
        console.log('inside edit', id);
        let editingData = await axios.get('http://localhost:4000/glossary/editglossary/' + id)
        console.log("editingData is ", editingData.data);
        setFormData({
            keyword: editingData.data.keyword,
            definition: editingData.data.definition
        })
        // .then((res) => {
        //     console.log('Edit Glossary', res.data)
        //     setFormData(res.data)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }

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
                                        value={formData.keyword}
                                    />
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Define Keyword</label>
                                    <textarea
                                        name='definition'
                                        row="4" col="50" placeholder='Enter Answer'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={formData.definition}
                                    >
                                    </textarea>
                                </div>
                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col >Keyword</Col>
                        <Col xs={6} md={6} lg={7}>Definition</Col>
                        <Col>Edit</Col>
                        <Col>Delete</Col>
                    </Row>
                    {thearray.sort((a, b) => (a.keyword > b.keyword) ? 1 : -1).map((item, index) =>
                        <Row key={index} className='library-main-box p-1 align-items-center'>
                            <Col>{item.keyword}</Col>
                            <Col xs={6} md={6} lg={7}>{item.definition}</Col>
                            <Col onClick={() => { editKeyword(item._id); }}>< FaEdit /></Col>
                            <Col onClick={() => { deleteKeyword(item._id); }} >< FaTrashAlt /></Col>
                        </Row>
                    )}
                </Container>
            </div>
        </>
    )
}

export default Glossary;