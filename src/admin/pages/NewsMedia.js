import React, {useState, useEffect} from 'react'
import AdminHeader from '../layout/Header'
import {Container, Row, Col} from 'react-bootstrap'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import '../assets/DashboardStyle.css'
const AdminNewsMedia = () =>{
    const [formData, setFormData] = useState({   
        slug: '',
        logo: ''
    })
    const [thearray, setTheArray] = useState([]);

    const InputHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
        console.log(formData)
    }


    const submit = (e) => {
        e.preventDefault()
        var data = { name: formData.slug , logo: formData.logo }
        fetch(`http://localhost:4000/media/media`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        console.log(data)
 
    }
    const GetQuetion = () => {
        fetch('http://localhost:4000/media/media-list'
        )
            .then((res) => res.json())
            .then((res) => {
                setTheArray(res)
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
                                        name="slug"
                                        className="form-control"
                                        onChange={InputHandler}
                                        value={setFormData.slug}
                                    />
                                </div>
                                
                                <div xs={12} md={6} lg={6}>
                                    <label>Description</label>
                                    <textarea
                                        name='logo'
                                        row="4" col="50" placeholder='Enter Answer'
                                        className='form-control'
                                        onChange={InputHandler}
                                        value={setFormData.logo}
                                    >
                                    </textarea>
                                </div>
                                
                                </Row>

                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <table>
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
                        </table>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default AdminNewsMedia