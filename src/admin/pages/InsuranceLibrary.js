import React, { useState, useEffect } from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from "axios";
import Alert from ".././Alert";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const url = process.env.REACT_APP_URL

const AdminLibrary = () => {

    const [libraryData, setLibraryData] = useState({
        slug: '',
        title: '',
        // description: '',
        picture: ''
    })
    const [thearray, setTheArray] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState("");
    const [alertMsg, setAlertMsg] = useState(null);
    const [alertType, setAlertType] = useState('');
    const [Contents, setContents] = useState("")

    const alertFn = (message, type) => {
        setAlertMsg(message);
        setAlertType(type)
        setTimeout(() => {
            setAlertMsg(null)
        }, 2000);
    }
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
        e.preventDefault();
        if (libraryData.slug.split(/[ ]+/).join(" ").length < 4 || libraryData.title.split(/[ ]+/).join(" ").length < 10 || Contents.split(/[ ]+/).join("").length<3 ) {
            console.log('cant submit');
            // split(/[ ]+/).join(" ")
            alertFn("Your data is Not Saved", "danger")
        } else {
            const formData = new FormData();

            formData.append('picture', libraryData.picture);
            formData.append('slug', libraryData.slug);
            formData.append('title', libraryData.title);
            formData.append('description', Contents );

            axios.post(url+'/library/library', formData)
                .then((e) => {
                    console.log("Sucess", e);
                })
                .catch((e) => {
                    console.log('Error is', e);
                })
            setLibraryData({
                slug: '',
                title: '',
                // description: '',
                picture: ''
            })
            setContents("")
            alertFn("Your data is Saved", 'info');
        }
    }

    const updatefn = () => {
        console.log("update fn");
        if (libraryData.slug.split(/[ ]+/).join(" ").length < 4 || libraryData.title.split(/[ ]+/).join(" ").length < 4) {
            console.log('cant submit');
            alertFn("Not Updated", 'danger');
        } else {
            const { slug, title, picture } = libraryData
            axios.post(url + '/library/updatelibrary/' + editingId, {
                slug,
                title,
                picture,
                description:Contents
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            setEditing(false);
            setLibraryData({
                slug: '',
                title: '',
                picture: ''
            })
            setContents("")
            alertFn("Your data is Updated", 'info');
        }
    }

    const GetQuetion = () => {
        fetch(url + '/library/library'
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

    const deleteLibrary = (id) => {
        console.log('inside delete', id);
        axios.get(url + '/library/deletelibrary/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
        alertFn("Deleted", 'info');
    }

    const editLibrary = (id) => {
        setEditing(true)
        axios.get(url + '/library/editlibrary/' + id)
            .then((res) => {
                console.log('edit faq', res.data.question)
                setLibraryData({
                    slug: res.data.slug,
                    title: res.data.title,
                    description: res.data.description,
                    picture: res.data.picture
                })
                console.log("formData  is 2", libraryData);
            })
            .catch((error) => {
                console.log(error)
            });
        setEditingId(id);
        alertFn("Edit Now", 'info');
    }
    const newInputHandler=(e)=>{
        console.log('running',e);
        setContents(e)
    }

    return (
        <>
            <AdminHeader />
            <Alert alertMsg={alertMsg} alertType={alertType} />
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
                                                value={libraryData.slug}
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
                                                value={libraryData.title}
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
                                    <Col xs={12} md={12} lg={12}>
                                        <div>
                                            <label>Description</label>
                                            {/* <textarea
                                                name='description'
                                                rows={3}
                                                className="form-control"
                                                placeholder='Enter Description'
                                                onChange={InputHandler}
                                                value={libraryData.description}
                                            /> */}
                                            <SunEditor name='description' height="100px" placeholder='Enter Description' onChange={newInputHandler} setContents={libraryData.description}  />
                                        </div>
                                    </Col>
                                    
                                </Row>
                                <Col>
                                    {/* <button className='btn btn-primary m-2' >Submit</button> */}
                                    {
                                        editing ?
                                            <button type='button' onClick={updatefn} className='btn btn-primary m-1'>Update</button>
                                            :
                                            <button type='button' onClick={submit} className='btn btn-primary m-1'>Submit</button>
                                    }

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
                            <Col xs={4} md={4} lg={4}  onClick={()=>{console.log("hi",<div dangerouslySetInnerHTML={{ __html: item.description } } />); }} >   <div dangerouslySetInnerHTML={{ __html: item.description } } /> </Col>
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