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
    // const [selectedImage, setSelectedImage] = useState(null);

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setLibraryData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }
    const handlepicture = (e) =>{
        setLibraryData({...libraryData, picture: e.target.files[0] })
        console.log("Library picture 1 ", libraryData.picture );
    }

    const submit = (e) => {
        e.preventDefault()

        const formData = new FormData();

        formData.append('picture', libraryData.picture );
        formData.append('slug', libraryData.slug );
        formData.append('title', libraryData.title );
        formData.append('description', libraryData.description );

        console.log("Library picture 2", libraryData.picture );
        console.log("Library picture 3", formData );

        axios.post('//localhost:4000/library/library', formData)
            .then((e) => {
                console.log("Sucess",e);
            })
            .catch((e) => {
                console.log('Error is', e);
            })

        // const data = { slug: libraryData.slug, title: libraryData.title, description: libraryData.description, picture: selectedImage }
        // fetch(`http://localhost:4000/library/library`, {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),
        // })

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
    })

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
                        <Col >Slug</Col>
                        <Col xs={2} md={2} lg={2}>Title</Col>
                        <Col xs={4} md={4} lg={4}>Description</Col>
                        <Col >Picture</Col>
                        <Col>Edit</Col>
                        <Col>Delete</Col>
                    </Row>

                    {thearray.map((item, index) =>
                        <Row key={index} className='library-main-box p-1 align-items-center'>
                            <Col>{item.slug}</Col>
                            <Col xs={2} md={2} lg={2}>{item.title}</Col>
                            <Col xs={4} md={4} lg={4}>{item.description})</Col>
                            <Col>{item.picture}</Col>
                            <Col>< FaEdit /></Col>
                            <Col>< FaTrashAlt /></Col>
                        </Row>
                    )}
                </Container>
            </div>
        </>
    )
}


export default AdminLibrary