import React, { useState, useEffect } from 'react'
import AdminHeader from '../layout/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import '../assets/DashboardStyle.css'
import axios from "axios"

const AdminNewsMedia = () => {
    const [formData, setFormData] = useState({
        headline: '',
        detail: ''
    })
    const [thearray, setTheArray] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState("");

    const InputHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        // console.log(formData)
    }

    const submit = (e) => {
        e.preventDefault()
        var data = { headline: formData.headline, detail: formData.detail }
        fetch(`http://localhost:4000/news/news`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        console.log("data is",data)
    }

    const updatefn = () => {
        console.log("update fn");
        axios.post('http://localhost:4000/news/updatenews/' + editingId, {
            headline: formData.headline,
            detail: formData.detail
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        setEditing(false);
        console.log("Edit el");

    }
    const GetQuetion = () => {
        fetch('http://localhost:4000/news/news'
        )
            .then((res) => res.json())
            .then((res) => {
                setTheArray(res)
            })
    }

    useEffect(() => {
        GetQuetion()
        // console.log("useEffect");
    }, [thearray])


    const editNews = (id) => {
        setEditing(true)
        axios.get('http://localhost:4000/news/editnews/' + id)
            .then((res) => {
                // console.log('edit news', res.data.question)
                setFormData({
                    headline: res.data.headline,
                    detail: res.data.detail
                })
                // console.log("formData  is 2", formData);
            })
            .catch((error) => {
                console.log(error)
            })
        setEditingId(id);
    }

    const deletenews = (id) => {
        axios.get('http://localhost:4000/news/deletenews/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <>
            <AdminHeader />
            <div className='content-here'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Add News & Media</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onSubmit={submit} className='form-style'>
                                <Row>
                                    <div xs={12} md={6} lg={6}>
                                        <label>name</label>
                                        <input
                                            type="text"
                                            name="headline"
                                            className="form-control"
                                            onChange={InputHandler}
                                            value={formData.headline}
                                        />
                                    </div>

                                    <div xs={12} md={6} lg={6}>
                                        <label>Description</label>
                                        <textarea
                                            name='detail'
                                            row="4" col="50" placeholder='Enter Answer'
                                            className='form-control'
                                            onChange={InputHandler}
                                            value={formData.detail}
                                        >
                                        </textarea>
                                    </div>

                                </Row>

                                {/* <button className='btn btn-primary'>Submit</button> */}
                                {
                                    editing ?
                                        <button type='button' onClick={updatefn} className='btn btn-primary m-1'>Update</button>
                                        :
                                        <button type='button' onClick={submit} className='btn btn-primary m-1'>Submit</button>
                                }
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        {/* <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {thearray.map((item, index) => (
                                    <tr>
                                        <td>{item.question}</td>
                                        <td>< FaEdit /></td>
                                        <td><FaTrashAlt /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> */}
                        <Col xs={4} md={4} lg={4}>Title</Col>
                        <Col xs={6} md={6} lg={6}>Description</Col>
                        <Col>Edit</Col>
                        <Col>Delete</Col>
                    </Row>
                    {thearray.map((item, index) =>
                        <Row key={index} className='library-main-box p-1 align-items-center'>
                            <Col xs={4} md={4} lg={4}>{item.headline}</Col>
                            <Col xs={6} md={6} lg={6}>{item.detail}</Col>
                            <Col onClick={() => { editNews(item._id); }}>< FaEdit /></Col>
                            <Col onClick={() => { deletenews(item._id); }} >< FaTrashAlt /></Col>
                        </Row>
                    )}

                </Container>
            </div>
        </>
    )
}


export default AdminNewsMedia