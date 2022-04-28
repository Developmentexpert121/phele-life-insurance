import React, { useState, useEffect } from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from "axios";

const AdminLibrary = () => {

    const [libraryData, setLibraryData] = useState({
        slug: '',
        title: '',
        description: '',
        picture: ''
    })
    const [thearray, setTheArray] = useState([]);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setLibraryData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }
    const handlepicture = (e) => {
        setLibraryData({ ...libraryData, picture: e.target.files[0] })

    }

    const submit = (e) => {
        e.preventDefault()
        const formData = new FormData();

        formData.append('picture', libraryData.picture);
        formData.append('slug', libraryData.slug);
        formData.append('title', libraryData.title);
        formData.append('description', libraryData.description);

        axios.post('//localhost:4000/library/library', formData)
            .then((e) => {
                console.log("Sucess", e);
            })
            .catch((e) => {
                console.log('Error is', e);
            })
    }

    const GetQuetion = () => {
        fetch('http://localhost:4000/library/library'
        )
            .then((res) => res.json())
            .then((res) => {
                setTheArray(res)
            })
    }
    useEffect(() => {
        GetQuetion()
    }, [thearray])

    const deleteLibrary = (id) => {
        console.log('inside delete', id);
        axios.get('http://localhost:4000/library/deletelibrary/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const editLibrary = (id) => {
        console.log('inside edit', id);
    }

    return (
        <>
            <AdminHeader />
            <div className='content-here'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <h3>Add Insurance Library</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onSubmit={submit} encType='multipart/form-data' >
                                <Row>
                                    <Col xs={12} md={6} lg={6}>
                                        <div>
                                            <label>Slug</label>
                                            <input
                                                type="text"
                                                name='slug'
                                                className='form-control'
                                                placeholder='Enter Slug. Ex: This-is-title'
                                                onChange={InputHandler}
                                                value={setLibraryData.slug}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                        <div>
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                name='title'
                                                className='form-control'
                                                placeholder='Enter Title'
                                                onChange={InputHandler}
                                                value={setLibraryData.title}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={12} lg={12}>
                                        <div>
                                            <label>Description</label>
                                            <textarea
                                                name='description'
                                                rows={3}
                                                className="form-control"
                                                placeholder='Enter Description'
                                                onChange={InputHandler}
                                                value={setLibraryData.description}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                        <label>Company Logo</label>
                                        <input
                                            type="file"
                                            name="picture"
                                            className="form-control"
                                            onChange={handlepicture} />

                                        {/* {selectedImage && (
                                            <div>
                                                <img alt="not fount" width={"100px"} src={URL.createObjectURL(selectedImage)} />
                                                <br />
                                                <button onClick={() => setSelectedImage(null)}>Remove</button>
                                            </div>
                                        )} */}
                                    </Col>
                                </Row>
                                <Col>
                                    <button className='btn btn-primary m-2' >Submit</button>

                                </Col>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} md={2} lg={2}>Slug</Col>
                        <Col xs={2} md={2} lg={2}>Title</Col>
                        <Col xs={4} md={4} lg={4}>Description</Col>
                        <Col xs={2} md={2} lg={2}>Picture</Col>
                        <Col xs={1} md={1} lg={1}>Edit</Col>
                        <Col xs={1} md={1} lg={1}>Delete</Col>
                    </Row>

                    {thearray.map((item, index) =>
                        <Row key={index} className='library-main-box p-1 align-items-center'>
                            <Col xs={2} md={2} lg={2}>{item.slug}</Col>
                            <Col xs={2} md={2} lg={2}>{item.title}</Col>
                            <Col xs={4} md={4} lg={4}>{item.description})</Col>
                            <Col xs={2} md={2} lg={2}>{item.picture}</Col>
                            <Col xs={1} md={1} lg={1} onClick={() => { editLibrary(item._id); }} >< FaEdit /></Col>
                            <Col xs={1} md={1} lg={1} onClick={() => { deleteLibrary(item._id); }} >< FaTrashAlt /></Col>
                        </Row>
                    )}
                </Container>
            </div>
        </>
    )
}


export default AdminLibrary