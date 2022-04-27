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
    // const [selectedImage, setSelectedImage] = useState();
    const [thearray, setTheArray] = useState([]);

    const InputHandler = (e) => {
        const { name, value } = e.target
        setCompanyData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        // console.log(e.target.value)
    }
    const handlepicture = (e) => {
        setCompanyData({ ...companyData, picture: e.target.files[0] })
        console.log("Library picture 1 ", companyData.picture);
    }
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('picture', companyData.picture );
        formData.append('companyName', companyData.companyName);
        formData.append('mobile', companyData.mobile );
        formData.append('url', companyData.url );

        console.log("Company picture 2", companyData.picture );
        console.log("Company Form data", formData );

        axios.post('//localhost:4000/companies/companies-list', formData)
            .then((e) => {
                console.log("Sucess",e);
            })
            .catch((e) => {
                console.log('Error is', e);
            })

        // var data = { picture: selectedImage.name, name: formData.companyName, mobile: formData.tollFreeNo, url: formData.website }
        // fetch(`http://localhost:4000/companies/companies-list`, {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),

        // })
        // console.log("data", data);
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
                                        value={setCompanyData.companyName}
                                    />
                                </div>
                                <div xs={12} md={6} lg={6}>
                                    <label>TollFree No.</label>
                                    <input
                                        type="text"
                                        name='mobile'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={setCompanyData.mobile}
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
                                        value={setCompanyData.url}
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
