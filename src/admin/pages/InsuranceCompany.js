import React, { useEffect, useState } from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export default function InsuranceCompany() {

    const [formData, setFormData] = useState({
        companyName: '',
        tollFreeNo: '',
        website: ''
    })
    const [selectedImage, setSelectedImage] = useState(null);
    const [thearray, setTheArray] = useState([]);

    const InputHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        var data = { photo:selectedImage.name , name: formData.companyName, mobile: formData.tollFreeNo, url: formData.website }
        fetch(`http://localhost:4000/companies/company-list`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            
        })
        console.log("data", data);
    }
    const GetQuetion = () => {
        fetch('http://localhost:4000/companies/companies-list'
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
            < AdminHeader />
            <div className='content-here'>
                <Container>
                    <Row>
                        <Col>
                            <h3>List of Insurance Companies</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <form onSubmit={submit}>
                                <div xs={12} md={6} lg={6}>
                                    <label>Company Logo</label>
                                    <input
                                        type="file"
                                        name="companyLogo"
                                        className="form-control"
                                        onChange={(event) => {
                                            console.log("Selected ", event.target.files[0]);
                                            setSelectedImage(event.target.files[0]);
                                            console.log("selected Image", selectedImage);
                                        }} />
                                    {selectedImage && (
                                        <div>
                                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                            <br />
                                            <button onClick={() => setSelectedImage(null)}>Remove</button>
                                        </div>
                                    )}
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        className="form-control"
                                        onChange={InputHandler}
                                        value={setFormData.companyName}
                                    />
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>TollFree No.</label>
                                    <input
                                        type="text"
                                        name='tollFreeNo'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={setFormData.tollFreeNo}
                                    >
                                    </input>
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Website</label>
                                    <input
                                        type="text"
                                        name='website'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={setFormData.website}
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-primary m-2'>Submit</button>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <table>
                            <thead>
                                <tr>
                                    <th>Picture</th>
                                    <th>Company Name</th>
                                    <th>Mobile No</th>
                                    <th>Company URL</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {thearray.map((item, index) => (
                                    <tr key={index} >
                                        <td>{item.photo}</td>
                                        <td>{item.name}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.url}</td>
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
