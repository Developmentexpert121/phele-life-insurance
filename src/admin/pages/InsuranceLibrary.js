import React, {useState, useEffect} from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from "axios";

const AdminLibrary = () => {
    const [formData, setFormData] = useState({
        slug: '',
        title: '',
        description :''
    })
    const [thearray, setTheArray] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const InputHandler = (e) =>{
        const {name, value} = e.target;
        setFormData((prevdata) => ({
            ...prevdata,
            [e.target.name] : e.target.value
        }))
    }

    const submit = (e) =>{
        e.preventDefault()
        const data = {slug: formData.slug, title: formData.title, description: formData.description, picture:selectedImage.name}  
        fetch(`http://localhost:4000/library/library`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        const imageData = new FormData();
        console.log("imagedata is",imageData);
        imageData.append( 'file', selectedImage );
        axios.post('//localhost:4000/upload', imageData)
            .then((e)=>{
                console.log("Sucess");
            })
            .catch((e)=>{
                console.log('Error is',e);
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
                            <form onSubmit={submit}>
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
                                                value={setFormData.slug}
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
                                                value={setFormData.title}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={12} lg={12}>
                                        <div>
                                            <label>Title</label>
                                            <textarea 
                                                name='description'
                                                rows={3}
                                                className="form-control"
                                                placeholder='Enter Description'
                                                onChange={InputHandler}
                                                value={setFormData.description}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                    <label>Company Logo</label>
                                    <input
                                        type="file"
                                        name="companyLogo"
                                        className="form-control"
                                        onChange={(event) => {
                                            console.log("Selected 1 ", event.target.files[0]);
                                            setSelectedImage(event.target.files[0]);
                                        }} />
                                    {selectedImage && (
                                        <div>
                                            <img alt="not fount" width={"100px"} src={URL.createObjectURL(selectedImage)} />
                                            <br />
                                            <button onClick={() => setSelectedImage(null)}>Remove</button>
                                        </div>
                                    )}
                                    </Col>
                                </Row>
                                <Col>
                                    <button className='btn btn-primary m-2' >Submit</button>

                                </Col>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <table>
                            <thead>
                                <tr>
                                    <th>Slug</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Picture</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {thearray.map((item, index) => (
                                    <tr key={index} >
                                        <td>{item.slug}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.picture}</td>
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


export default AdminLibrary