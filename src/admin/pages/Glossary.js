import React, { useState, useEffect } from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import Alert from ".././Alert";

const url = process.env.REACT_APP_URL


const Glossary = () => {
    const [formData, setFormData] = useState({
        keyword: '',
        definition: '',
        id: ''
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


    }
    const submit = (e) => {
        e.preventDefault()
        if (formData.keyword.split(/[ ]+/).join(" ").length < 2 || formData.definition.split(/[ ]+/).join(" ").length < 2) {
            console.log("Cant submit in Glossary");
            alertFn("Your data is Not Saved", "danger")

        } else {
            let data = { keyword: formData.keyword.toUpperCase(), definition: formData.definition }
            fetch(url+`/glossary/keyword`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            setFormData({
                keyword: "",
                definition: ""
            })
            alertFn("Your data is Saved", 'info');
        }
    }

    const updatefn = () => {
        console.log("update fn");
        if (formData.keyword.split(/[ ]+/).join(" ").length < 2 || formData.definition.split(/[ ]+/).join(" ").length < 2) {
            console.log("Cant submit in Glossary");
            alertFn("Not Updated", 'danger');
        } else {
            let data = { keyword: formData.keyword.toUpperCase(), definition: formData.definition }
            axios.post(url+'/glossary/updateglossary/' + editingId, data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            setEditing(false);
            setFormData({
                keyword: "",
                definition: ""
            })
            alertFn("Your data is Updated", 'info');
        }
    }
    // const GetKeyword = () => {
    //     fetch(url+'/glossary/keyword'
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

        fetch(url+'/glossary/keyword'
        )
            .then((res) => res.json())
            .then((res) => {
                if (isMounted) setTheArray(res)
            })
        return () => { isMounted = false }; // cleanup toggles value, if unmounted
    }, [thearray]);

    const deleteKeyword = (id) => {
        console.log('inside delete', id);
        axios.get(url+'/glossary/deleteglossary/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
            alertFn("Deleted", 'info');
    }

    const editKeyword = async (id) => {
        setEditing(true)
        // console.log('inside edit', id);
        let editingData = await axios.get(url+'/glossary/editglossary/' + id)
        // console.log("editingData is ", editingData.data);
        setFormData({
            keyword: editingData.data.keyword,
            definition: editingData.data.definition
        })
        setEditingId(id);
        alertFn("Edit Now",'info');

    }

    return (
        <>
            < AdminHeader />
            <Alert alertMsg={alertMsg} alertType={alertType} />
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