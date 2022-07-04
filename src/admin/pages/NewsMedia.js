import React, { useState, useEffect } from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import '../assets/DashboardStyle.css';
import axios from "axios";
import Alert from ".././Alert";

const url = process.env.REACT_APP_URL

const AdminNewsMedia = () => {
    const [formData, setFormData] = useState({
        headline: '',
        detail: '',
        source: ''
    })
    const [thearray, setTheArray] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState("");
    const [alertMsg, setAlertMsg] = useState(null);
    const [alertType, setAlertType] = useState('');

    const alertFn = (message, type) => {
        setAlertMsg(message);
        setAlertType(type)
        setTimeout(() => {
            setAlertMsg(null)
        }, 2000);
    }

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
        if (formData.headline.split(/[ ]+/).join(" ").length < 4 || formData.detail.split(/[ ]+/).join(" ").length < 4 || formData.source.split(/[ ]+/).join(" ").length < 4) {
            console.log('cant submit');
            alertFn("Your data is Not Saved", "danger")
        } else {
            var data = { headline: formData.headline, detail: formData.detail, source: formData.source }
            fetch(url+`/news/news`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            console.log(formData);
            setFormData({
                headline: '',
                detail: '',
                source: ''
            })
            alertFn("Your data is Saved", 'info');
        }
    }

    const updatefn = () => {
        console.log("update fn");
        if (formData.headline.split(/[ ]+/).join(" ").length < 4 || formData.detail.split(/[ ]+/).join(" ").length < 4 || formData.source.split(/[ ]+/).join(" ").length < 4) {
            console.log('cant submit');
            alertFn("Not Updated", 'danger');
        } else {
            axios.post(url+'/news/updatenews/' + editingId, {
                headline: formData.headline,
                detail: formData.detail,
                source: formData.source
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            setEditing(false);
            setFormData({
                headline: '',
                detail: '',
                source: ''
            })
            alertFn("Your data is Updated", 'info');
        }

    }
    const GetQuetion = () => {
        fetch(url+'/news/news'
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
        axios.get(url+'/news/editnews/' + id)
            .then((res) => {
                // console.log('edit news', res.data.question)
                setFormData({
                    headline: res.data.headline,
                    detail: res.data.detail,
                    source: res.data.source,
                })
                // console.log("formData  is 2", formData);
            })
            .catch((error) => {
                console.log(error)
            })
        setEditingId(id);
        alertFn("Edit Now", 'info');
    }

    const deletenews = (id) => {
        axios.get(url+'/news/deletenews/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
        alertFn("Deleted", 'info');
    }

    return (
        <>
            <AdminHeader />
            <Alert alertMsg={alertMsg} alertType={alertType} />
            <div className='content-here'>
                <Container>
                    <Row >
                        <Col>
                            <h3>Add News & Media</h3>
                        </Col>
                    </Row>
                    <Row  >
                        <Col>
                            <form onSubmit={submit} className='form-style'>
                                <Row >
                                    <div xs={12} md={6} lg={6}>
                                        <label>News</label>
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

                                    <div xs={12} md={6} lg={6}>
                                        <label>Source</label>
                                        <input
                                            type="text"
                                            name="source"
                                            className="form-control"
                                            onChange={InputHandler}
                                            value={formData.source}
                                        />
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
                        <Col xs={3} md={3} lg={3}>Title</Col>
                        <Col xs={5} md={5} lg={5}>Description</Col>
                        <Col xs={2} md={2} lg={2}>Source</Col>
                        <Col>Edit</Col>
                        <Col>Delete</Col>
                    </Row>
                    {thearray.map((item, index) =>
                        <Row key={index} className='library-main-box p-1 align-items-center'>
                            <Col xs={3} md={3} lg={3}>{item.headline}</Col>
                            <Col xs={5} md={5} lg={5}>{item.detail}</Col>
                            <Col xs={2} md={2} lg={2}>{item.source}</Col>
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