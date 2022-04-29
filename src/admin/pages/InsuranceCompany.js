import React, { useEffect, useState } from 'react';
import AdminHeader from '../layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from "axios";

export default function InsuranceCompany() {

    const [companyData, setCompanyData] = useState({
        picture: '',
        companyName: '',
        mobile: '',
        url: ''
    })

    const [thearray, setTheArray] = useState([]);

    const InputHandler = (e) => {
        const { name, value } = e.target
        setCompanyData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }
    const handlepicture = (e) => {
        setCompanyData({ ...companyData, picture: e.target.files[0] })

    }
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('picture', companyData.picture);
        formData.append('companyName', companyData.companyName);
        formData.append('mobile', companyData.mobile);
        formData.append('url', companyData.url);

        axios.post('//localhost:4000/companies/companies-list', formData)
            .then((e) => {
                console.log("Sucess", e);
            })
            .catch((e) => {
                console.log('Error is', e);
            })

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
        console.log("useEffect");
    }, [thearray])

    const deleteCompany = (id) => {
        console.log('inside delete', id);
        axios.get('http://localhost:4000/companies/deletecompany/' + id)
            .then(() => {
                console.log('Deleted')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const editCompany = (id) => {
        axios.get('http://localhost:4000/companies/editcompany/' + id)
        .then((res) => {
            console.log('edit faq', res.data.question)
            setCompanyData({
                picture: res.data.picture,
                companyName: res.data.companyName,
                mobile: res.data.mobile,
                url: res.data.url
            })
            console.log("formData  is 2", companyData);
        })
        .catch((error) => {
            console.log(error)
        });
    }

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
                            <form onSubmit={submit} encType='multipart/form-data'>
                                <div xs={12} md={6} lg={6}>
                                    <label>Company Logo</label>
                                    <input
                                        type="file"
                                        name="picture"
                                        className="form-control"
                                        onChange={handlepicture} />
                                    {/* {selectedImage && (
                                        <div>
                                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                            <br />
                                            <button onClick={() => setSelectedImage(null)}>Remove</button>
                                        </div>
                                    )} */}
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        className="form-control"
                                        onChange={InputHandler}
                                        value={companyData.companyName}
                                    />
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>TollFree No.</label>
                                    <input
                                        type="text"
                                        name='mobile'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={companyData.mobile}
                                    >
                                    </input>
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>Website</label>
                                    <input
                                        type="text"
                                        name='url'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={companyData.url}
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-primary m-2'>Submit</button>
                                <button className='btn btn-primary m-2' onClick={() => { console.log(thearray) }} >Console</button>
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
                                        <td>{item.picture}</td>
                                        <td>{item.companyName}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.url}</td>
                                        <td onClick={() => { editCompany(item._id); }}>< FaEdit /></td>
                                        <td onClick={() => { deleteCompany(item._id); }} ><FaTrashAlt /></td>
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
